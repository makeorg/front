import { getIdentifierButtonByName } from '../mapping';
import { BASE_URL } from '../../../shared/constants/config';

// pages list
export const pages = {
  'homepage': '/',
  'france homepage': '/FR',
  'british homepage': '/GB',
  'sequence': '/FR/consultation/:questionSlug/selection',
  'general terms of use': '/FR/conditions-dutilisation',
  'data policy': '/FR/politique-donnees',
  'about': 'https://about.make.org',
  'results': '/FR/consultation/:questionSlug/results',
  'browse consultations' : '/FR/browse/consultations/page/1',
  'browse results' : '/FR/browse/results/page/1',
  'browse results second page' : '/FR/browse/results/page/2',
  'top idea': '/FR/consultation/:questionSlug/top-ideas',
  "search": '/FR/search',
  'cookies': '/FR/cookies',
};

export const container = {
  'header': 'header',
  'footer': 'footer'
}


// helpers
const checkPageExist = (page) => {
  if (!pages[page]) {
    throw Error(`You should define "${page}" path`);
  }
};


// navigation
given('I go to 404 page', () => {
  cy.visit('/fakeurl', {failOnStatusCode: false});
});

given('I go to 404 FR page', () => {
  cy.visit('/FR/fakeurl', {failOnStatusCode: false});
});


given('I go/am to/on {string}', (targetPage) => {
  checkPageExist(targetPage);
  cy.visit(pages[targetPage]);
});

given('I go/am to/on {string} from Great Britain', (targetPage) => {
  checkPageExist(targetPage);
  cy.visit(pages[targetPage], { headers: { 'x-detected-country' : 'GB' } });
});

given('I am/go on/to {string} page of the question {string}', (targetPage, questionSlug) => {
  checkPageExist(targetPage);
  const page = pages[targetPage].replace(':questionSlug', questionSlug);
  cy.visit(page);
});

When('I focus {string} field', (fieldName) => {
  cy.get(`[data-cy-field=${fieldName}]`).first().focus();
});

When('I click on {string} link', link => {
  cy.get(`[data-cy-link=${link}]`)
    // @todo: change this line to not force click on hidden elements
    .click({force:true}) 
});

When('I click on {string} button', buttonName => {
  cy.get(`button[data-cy-button=${getIdentifierButtonByName(buttonName)}]`)
    .wait(1000) // @toDo try to remove this after removing deprecated sequence
     // @todo: change this line to not force click on hidden elements
     .click({force:true}) 
});


// accessibility
then('html page should be valid', (targetPage) => {
  cy.htmlvalidate();
});

// I see page
then('I see the {string} page', (targetPage) => {
  if (!pages[targetPage]) {
    throw Error(`You should define "${targetPage}"`);
  }

  cy.url().should('include', pages[targetPage]);
});

then('I see the {string} page with {string} as query params', (targetPage, queryParams) => {
  if (!pages[targetPage]) {
    throw Error(`You should define "${targetPage}"`);
  }

  cy.url().should('include', `${pages[targetPage]}?${queryParams}`);
});

// I see canonical url
then('I see the canonical url {string} of the page', (CanonicalUrl) =>{

  cy.get(`[data-cy=canonical_url]`)
  .first()
  .should('exist')
  .and('have.attr', 'href')
  .should('eq', CanonicalUrl)
})

// I see container
then ('I see {string} container', containerName => {
  cy.get(`[data-cy-container=${containerName}]`)
    .should('be.visible');
});

then('I don\'t see {string} container', containerName => {
  cy.get(`[data-cy-container=${containerName}]`)
    .should('not.be.visible');
});


then('I see {string} in {string} container', (text, containerName) => {
  cy.get(`[data-cy-container=${containerName}]`).first().should('contain', text);
});


// I see link
then('I see a link {string} to {string} in {string} container', (linkLabel, href, containerName) => {
  cy.get(`[data-cy-container=${containerName}]`)
    .first()
    .contains('a', new RegExp(linkLabel))
    .should('exist')
    .and('have.attr', 'href', href)
    .and('be.visible');
});

then('I see an external link {string} to {string} in {string} container', (linkLabel, href, containerName) => {
  cy.get(`[data-cy-container=${containerName}]`)
    .first()
    .contains('a', new RegExp(linkLabel))
    .should('exist')
    .and('have.attr', 'href', href)
    .and('have.attr', 'target', '_blank')
    .and('be.visible');
});


then('The link {string} to {string} in {string} container exists', (linkLabel, href, containerName) => {
  cy.get(`[data-cy-container=${containerName}]`)
    .first()
    .contains('a', new RegExp(linkLabel))
    .should('exist')
    .and('have.attr', 'href', href);
});

then('I don\'t see the link {string}', (label) => {
  cy.get('body')
    .contains('a', label)
    .should('not.visible');
});

// I see button
then('I see (a )(the ){string} button', (buttonName) => {
  cy.get(`button[data-cy-button=${getIdentifierButtonByName(buttonName)}]`)
    .scrollIntoView()
    .should('exist')
    .and('be.visible');
});

then('I don\'t see (a )(the ){string} button', (buttonName) => {
  cy.get(`button[data-cy-button=${getIdentifierButtonByName(buttonName)}]`)
    .should('not.be.visible');
});

then('I see a button {string} in {string} container', (buttonName, containerName) => {
  cy.get(`[data-cy-container=${containerName}]`)
    .first()
    .find(`button[data-cy-button=${getIdentifierButtonByName(buttonName)}]`)
    .scrollIntoView()
    .should('exist')
    .and('be.visible');
});

then('I see a button {string} with label {string}', (buttonName, containerName, label) => {
  cy.get(`button[data-cy-button=${getIdentifierButtonByName(buttonName)}]`)
    .first()
    .scrollIntoView()
    .contains(new RegExp(label))
    .should('exist')
    .and('be.visible');
});

then('I see a button {string} in {string} container with label {string}', (buttonName, containerName, label) => {
  cy.get(`[data-cy-container=${containerName}]`)
    .first()
    .find(`button[data-cy-button=${getIdentifierButtonByName(buttonName)}]`)
    .scrollIntoView()
    .contains(new RegExp(label))
    .should('exist')
    .and('be.visible');
});

// I see link
then('I see (a )(the ){string} link', (link) => {
  cy.get(`a[data-cy-link=${link}]`)
    .scrollIntoView()
    .should('exist')
    .and('be.visible');
});

// disabled button
then('the {string} button is disabled', (buttonName) => {
  cy.get(`[data-cy-button=${getIdentifierButtonByName(buttonName)}]`).first().should('have.attr', 'disabled');
});

then('the {string} button is enabled', (buttonName) => {
  cy.get(`[data-cy-button=${getIdentifierButtonByName(buttonName)}]`).first().should('not.have.attr', 'disabled');
});


// I see text
then('I don\'t see {string}', (text) => {
  cy.get('body').contains(text)
    .scrollIntoView()
    .should('exist')
    .and('not.be.visible');
});

then('I see {string}', (text) => {
  cy.get('body').contains(text)
    .scrollIntoView()
    .should('exist')
    .and('be.visible');
});

// forms
then('I type {string} in field {string}', (text, fieldName) => {
  cy.get(`[data-cy-field=${fieldName}]`)
    .first()
    .type(text, {delay: 10, release: false});
});

then('I see {string} in field {string}', (text, fieldName) => {
  cy.get(`[data-cy-field=${fieldName}]`)
    .first()
    .contains(new RegExp(text))
    .should('exist')
    .and('be.visible');
});

then ('The field {string} should have value {string}', (fieldName, value) => {
  cy.get(`[data-cy-field=${fieldName}]`)
    .first()
    .should('have.value', value)
});

then ('The field {string} should be empty', fieldName => {
  cy.get(`[data-cy-field=${fieldName}]`)
    .first()
    .should('have.value', '')
});

// others
then('The mouse is focused in {string} field', (field) => {
  cy.focused().should('have.attr', 'id').and('eq', field);
});
