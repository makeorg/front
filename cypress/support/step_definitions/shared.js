import { getIdentifierButtonByName } from '../mapping';

// pages list
export const pages = {
  'homepage': '/',
  'france homepage': '/FR-fr',
  'sequence': '/FR-fr/consultation/:questionSlug/selection',
  'general terms of use': '/FR-fr/conditions-dutilisation',
  'data policy': '/FR-fr/politique-donnees',
  'about': 'https://about.make.org',
  'results': '/FR-fr/consultation/:questionSlug/results',
  'browse consultations' : '/FR-fr/browse/consultations/page/1',
  'browse results' : '/FR-fr/browse/results/page/1',
  'browse results second page' : '/FR-fr/browse/results/page/2',
};

// helpers
const checkPageExist = (page) => {
  if (!pages[page]) {
    throw Error(`You should define "${page}" path`);
  }
};

// navigation
given('I go to {string}', (targetPage) => {
  checkPageExist(targetPage);
  cy.visit(pages[targetPage]);
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
    //@todo: change this line to not force click on hidden elements
    .click({force:true}) 
});

When('I click on {string} button', buttonName => {
  //@todo: wait is necessary to allow page scrolling. See if it can be replaced by something else
  cy.get(`button[data-cy-button=${getIdentifierButtonByName(buttonName)}]`).wait(1000).click()
});

then('I see the {string} page', (targetPage) => {
  if (!pages[targetPage]) {
    throw Error(`You should define "${targetPage}"`);
  }

  cy.url().should('include', pages[targetPage]);
});


// I see
then('I see {string} in {string} container', (text, containerName) => {
  cy.get(`[data-cy-container=${containerName}]`).first().should('contain', text);
});

then('I see a link {string} to {string} in {string} container', (linkLabel, href, containerName) => {
  cy.get(`[data-cy-container=${containerName}]`)
    .first()
    .contains('a', new RegExp(linkLabel))
    .should('exist')
    .and('have.attr', 'href', href)
    .and('is.visible');
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
    .scrollIntoView()
    .should('not.visible');
});

then('I see a button {string} in {string} container', (buttonName, containerName) => {
  cy.get(`[data-cy-container=${containerName}]`)
    .first()
    .find(`button[data-cy-button=${getIdentifierButtonByName(buttonName)}]`)
    .scrollIntoView()
    .should('exist')
    .and('is.visible');
});

then('I see a button {string} with label {string}', (buttonName, containerName, label) => {
  cy.get(`button[data-cy-button=${getIdentifierButtonByName(buttonName)}]`)
    .first()
    .scrollIntoView()
    .contains(new RegExp(label))
    .should('exist')
    .and('is.visible');
});

then('I see a button {string} in {string} container with label {string}', (buttonName, containerName, label) => {
  cy.get(`[data-cy-container=${containerName}]`)
    .first()
    .find(`button[data-cy-button=${getIdentifierButtonByName(buttonName)}]`)
    .scrollIntoView()
    .contains(new RegExp(label))
    .should('exist')
    .and('is.visible');
});

then('I don\'t see {string}', (text) => {
  cy.get('body').contains(text)
    .scrollIntoView()
    .should('exist')
    .and('not.is.visible');
});

then('I see {string}', (text) => {
  cy.get('body').contains(text)
    .scrollIntoView()
    .should('exist')
    .and('is.visible');
});

// forms
then('I type {string} in field {string}', (text, fieldName) => {
  cy.get(`[data-cy-field=${fieldName}]`)
    .first()
    .type(text, {delay: 300, release: false});
});

// disabled
then('the {string} button is disabled', (buttonName) => {
  cy.get(`[data-cy-button=${getIdentifierButtonByName(buttonName)}]`).first().should('have.attr', 'disabled');
});

then('the {string} button is enabled', (buttonName) => {
  cy.get(`[data-cy-button=${getIdentifierButtonByName(buttonName)}]`).first().should('not.have.attr', 'disabled');
});

// others
then('The mouse is focused in {string} field', (field) => {
  cy.focused().should('have.attr', 'id').and('eq', field);
});
