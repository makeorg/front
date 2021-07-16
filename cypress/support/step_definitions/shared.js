import { getIdentifierButtonByName } from '../mapping';
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

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
  'search': '/FR/search',
  'accessibility declaration': '/FR/declaration-accessibilite',
  'participate consultation': 'FR/consultation/:questionSlug/participate',
  'explore consultation': 'FR/consultation/:questionSlug/explore/page/1',
  'legal mentions': 'FR/mentions-legales',
  'profile proposals': '/FR/profile/proposals',
  'profile favourites': '/FR/profile/favourites'
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

//Given I have already accepted the data policy 
Given('I have already accepted the cookie policy', () => {
  cy.setCookie('make-cookie', 'true');
});

//Given I have already answered to the demographics card
Given('I have already answered to the demographics card and the cookie is set', () => {
  cy.setCookie('make-demographics', 'true');
})

// navigation
Given('I go to 404 page', () => {
  cy.visit('/fakeurl', {failOnStatusCode: false});
});

Given('I go to 404 FR page', () => {
  cy.visit('/FR/fakeurl', {failOnStatusCode: false});
});


Given('I go/am to/on {string}', (targetPage) => {
  checkPageExist(targetPage);
  cy.visit(pages[targetPage]);
});

Given('I go/am to/on {string} from Great Britain', (targetPage) => {
  checkPageExist(targetPage);
  cy.visit(pages[targetPage], { headers: { 'x-detected-country' : 'GB' } });
});

Given('I am/go on/to {string} page of the question {string}', (targetPage, questionSlug) => {
  checkPageExist(targetPage);
  const page = pages[targetPage].replace(':questionSlug', questionSlug);
  cy.visit(page);
});

When('I am/go on/to {string} page of the question {string}', (targetPage, questionSlug) => {
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
Then('html page should be valid', (targetPage) => {
  cy.htmlvalidate();
});  

// I see page
Then('I see the {string} page', (targetPage) => {
  if (!pages[targetPage]) {
    throw Error(`You should define "${targetPage}"`);
  }

  cy.url().should('include', pages[targetPage]);
});

Then('I see the {string} page of the question {string}', (targetPage, questionSlug) => {
  if (!pages[targetPage]) {
    throw Error(`You should define "${targetPage}"`);
  }

  cy.url().should('include', pages[targetPage].replace(':questionSlug', questionSlug));
});

Then('I see the {string} page with {string} as query params', (targetPage, queryParams) => {
  if (!pages[targetPage]) {
    throw Error(`You should define "${targetPage}"`);
  }

  cy.url().should('include', `${pages[targetPage]}?${queryParams}`);
});

// I see canonical url
Then('I see the canonical url {string} of the page', (CanonicalUrl) =>{

  cy.get(`[data-cy=canonical_url]`)
  .first()
  .should('exist')
  .and('have.attr', 'href')
  .should('eq', CanonicalUrl)
})

// I see container
Then('I see {string} container', containerName => {
  cy.get(`[data-cy-container=${containerName}]`)
    .should('be.visible');
});

Then('The {string} container doesn\'t exist', containerName => {
  cy.get(`[data-cy-container=${containerName}]`)
    .should('not.exist');
});


Then('I see {string} in {string} container', (text, containerName) => {
  cy.get(`[data-cy-container=${containerName}]`).first().should('contain', text);
});


// I see link
Then('I see a link {string} to {string} in {string} container', (linkLabel, href, containerName) => {
  cy.get(`[data-cy-container=${containerName}]`)
    .first()
    .contains('a', new RegExp(linkLabel))
    .should('exist')
    .and('have.attr', 'href', href)
    .and('be.visible');
});

Then('I see an external link {string} to {string} in {string} container', (linkLabel, href, containerName) => {
  cy.get(`[data-cy-container=${containerName}]`)
    .first()
    .contains('a', new RegExp(linkLabel))
    .should('exist')
    .and('have.attr', 'href', href)
    .and('have.attr', 'target', '_blank')
    .and('be.visible');
});


Then('The link {string} to {string} in {string} container exists', (linkLabel, href, containerName) => {
  cy.get(`[data-cy-container=${containerName}]`)
    .first()
    .contains('a', new RegExp(linkLabel))
    .should('exist')
    .and('have.attr', 'href', href);
});

Then('The link {string} doesn\'t exist', (label) => {
  cy.get('body')
    .contains('a', label)
    .should('not.exist');
});

// I see button
Then('I see (a )(the ){string} button', (buttonName) => {
  cy.get(`button[data-cy-button=${getIdentifierButtonByName(buttonName)}]`)
    .scrollIntoView()
    .should('exist')
    .and('be.visible');
});

Then('The {string} button doesn\'t exist', (buttonName) => {
  cy.get(`button[data-cy-button=${getIdentifierButtonByName(buttonName)}]`)
    .should('not.exist');
});

Then('I don\'t see even if it exists (a )(the ){string} button', (buttonName) => {
  cy.get(`button[data-cy-button=${getIdentifierButtonByName(buttonName)}]`)
    .should('not.be.visible');
});

Then('I see a button {string} in {string} container', (buttonName, containerName) => {
  cy.get(`[data-cy-container=${containerName}]`)
    .first()
    .find(`button[data-cy-button=${getIdentifierButtonByName(buttonName)}]`)
    .scrollIntoView()
    .should('exist')
    .and('be.visible');
});

Then('I see a button {string} with label {string}', (buttonName, containerName, label) => {
  cy.get(`button[data-cy-button=${getIdentifierButtonByName(buttonName)}]`)
    .first()
    .scrollIntoView()
    .contains(new RegExp(label))
    .should('exist')
    .and('be.visible');
});

Then('I see a button {string} in {string} container with label {string}', (buttonName, containerName, label) => {
  cy.get(`[data-cy-container=${containerName}]`)
    .first()
    .find(`button[data-cy-button=${getIdentifierButtonByName(buttonName)}]`)
    .scrollIntoView()
    .contains(new RegExp(label))
    .should('exist')
    .and('be.visible');
});

// I see link
Then('I see (a )(the ){string} link', (link) => {
  cy.get(`a[data-cy-link=${link}]`)
    .scrollIntoView()
    .should('exist')
    .and('be.visible');
});

// disabled button
Then('the {string} button is disabled', (buttonName) => {
  cy.get(`[data-cy-button=${getIdentifierButtonByName(buttonName)}]`).first().should('have.attr', 'disabled');
});

Then('the {string} button is enabled', (buttonName) => {
  cy.get(`[data-cy-button=${getIdentifierButtonByName(buttonName)}]`).first().should('not.have.attr', 'disabled');
});


// I see text
Then('I don\'t see {string}', (text) => {
  cy.get('body').contains(text)
    .scrollIntoView()
    .should('exist')
    .and('not.be.visible');
});

Then('I see {string}', (text) => {
  cy.get('body').contains(text)
    .scrollIntoView()
    .should('exist')
    .and('be.visible');
});

// forms
Then('I type {string} in field {string}', (text, fieldName) => {
  cy.get(`[data-cy-field=${fieldName}]`)
    .first()
    .type(text, {delay: 10, release: false});
});

Then('I see {string} in field {string}', (text, fieldName) => {
  cy.get(`[data-cy-field=${fieldName}]`)
    .first()
    .contains(new RegExp(text))
    .should('exist')
    .and('be.visible');
});

Then('The field {string} should have value {string}', (fieldName, value) => {
  cy.get(`[data-cy-field=${fieldName}]`)
    .first()
    .should('have.value', value)
});

Then('The field {string} should be empty', fieldName => {
  cy.get(`[data-cy-field=${fieldName}]`)
    .first()
    .should('have.value', '')
});

// others
Then('The mouse is focused in {string} field', (field) => {
  cy.focused().should('have.attr', 'id').and('eq', field);
});
