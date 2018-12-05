/* @flow */

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as actions from './index';
import * as actionTypes from '../../constants/actionTypes';
import UserService from '../../api/UserService';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);
const store = mockStore();
const axiosMock = new MockAdapter(axios);

describe('Registration Actions', () => {
  let sandbox;
  beforeEach(function () {
    sandbox = sinon.createSandbox();
    store.clearActions();
    axiosMock.restore();
    axiosMock.onPost('/tracking/front').reply(204);
  });

  afterEach(function () {
      sandbox.restore();
  });

  it('Creates PROPOSE_TYPING when calling action', () => {
    const expectedActions = [{
      type: actionTypes.REGISTER_REQUEST
    }];

    store.dispatch(actions.registerRequest());
    expect(store.getActions()).to.deep.equal(expectedActions)
  });

  it('Creates REGISTER_SUCCESS when calling action', () => {
    const user = { firstname: 'foo' };
    const expectedActions = [{
      type: actionTypes.REGISTER_SUCCESS,
      user: user
    }];

    store.dispatch(actions.registerSuccess(user));
    expect(store.getActions()).to.deep.equal(expectedActions)
  });

  it('Creates REGISTER_FAILURE when calling action', () => {
    const errors = ['fooError'];
    const expectedActions = [{
      type: actionTypes.REGISTER_FAILURE,
      errors
    }];

    store.dispatch(actions.registerFailure(errors));
    expect(store.getActions()).to.deep.equal(expectedActions)
  });

  it('creates an action to register when success', () => {
    const store = mockStore({
      proposal: {canSubmit: false},
      authentification: {isLoggedIn: false }
    });

    const token = {foo: 'bar'};
    const user = {
      email: 'foo@example.com',
      password: 'baz'
    };

    const userServiceRegisterMock = sandbox.stub(UserService, 'register');
    userServiceRegisterMock.withArgs(user).returns(Promise.resolve(user));
    const userServiceLoginMock = sandbox.stub(UserService, 'login');
    userServiceLoginMock.withArgs(user.email, user.password).returns(Promise.resolve(token));

    const expectedActions = [
      { type: actionTypes.REGISTER_REQUEST },
      { type: actionTypes.REGISTER_SUCCESS, user },
      { type: actionTypes.LOGIN_SUCCESS, token },
      { type: actionTypes.PANNEL_CLOSE },
      { type: actionTypes.FORGOT_PASSWORD_INIT }
    ];

    return store.dispatch(actions.register(user)).then(() => {
      expect(store.getActions()).to.deep.equal(expectedActions)
    });
  });

  it('creates an action to register when failure', () => {
    const user = {
      email: 'foo@example.com',
      password: 'baz'
     };
     const errors = ['fooError'];

     const userServiceRegisterMock = sandbox.stub(UserService, 'register');
     userServiceRegisterMock.withArgs(user).returns(Promise.reject(['fooError']));

    const expectedActions = [
      { type: actionTypes.REGISTER_REQUEST },
      { type: actionTypes.REGISTER_FAILURE, errors }
    ];

    return store.dispatch(actions.register(user)).then(() => {
      expect(store.getActions()).to.deep.equal(expectedActions)
    });
  });
});
