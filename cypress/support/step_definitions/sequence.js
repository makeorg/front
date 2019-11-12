import { getIdentifierButtonByName } from '../mapping';

const sequencePage = '/FR/consultation/:questionSlug/selection';
const voteLabel = {
  "D'accord": "agree",
  "Pas d'accord": "disagree",
  "Neutre": "neutral"
};

given('I am/go on/to the sequence page of the question {string}', questionSlug => {
  const page = sequencePage.replace(':questionSlug', questionSlug);
  cy.monitorApiCall('getStartSequence');
  cy.visit(page);
  cy.wait('@getStartSequence', {timeout: 8000});
});

given('I am/go on/to the sequence page of the question {string} with intro card disabled', questionSlug => {
  const page = sequencePage.replace(':questionSlug', questionSlug);
  cy.monitorApiCall('getStartSequence');
  cy.visit(`${page}?introCard=false`);
  cy.wait('@getStartSequence', {timeout: 8000});
});


when ('I click on {string} of the sequence', (buttonName) => {
  const button = getIdentifierButtonByName(buttonName);
  cy.get(`[data-cy-button=${button}]`)
    .first()
    .then(el => el.get(0).click());
})

when ('I click on {string} of the current card', buttonName => {
  const button = getIdentifierButtonByName(buttonName);
  cy.get(`[data-cy-button=${button}]`)
    .first()
    .then(el => el.get(0).click());
})

when('I vote {string} on proposal {string}', (voteType, proposalNumber) => {
  cy.monitorApiCall('postVote');
  cy.get(`#${voteLabel[voteType]}-${proposalNumber}`)
    .then(el => el.get(0).click());
  cy.wait('@postVote');
});

when('I vote {string} on the first proposal of sequence', (voteType) => {
  cy.monitorApiCall('postVote');
  cy.get(`[data-cy-card-type=PROPOSAL_CARD] [data-cy-button=vote][data-cy-vote-key=${voteType}]`)
    .first()
    .then(el => el.get(0).click());
  cy.wait('@postVote');
});

when('I vote {string} on the current card', (voteType) => {
  cy.monitorApiCall('postVote');
  cy.get(`[data-cy-button=vote][data-cy-vote-key=${voteType}]`)
    .first()
    .then(el => el.get(0).click());
  cy.wait('@postVote');
});

when('I qualify {string} on the current card', (qualificationType) => {
  cy.monitorApiCall('postQualify');
  cy.get(`[data-cy-button=qualification][data-cy-qualification-key=${qualificationType}]`)
    .first()
    .then(el => el.get(0).click());
  cy.wait('@postQualify')
  
});

when('I unqualify {string} on the current card', (qualificationType) => {
  cy.monitorApiCall('postUnqualify');
  cy.get(`[data-cy-button=qualification][data-cy-qualification-key=${qualificationType}]`)
    .first()
    .then(el => el.get(0).click());
  cy.wait('@postUnqualify');
});


when('I unvote on the current card', () => {
  cy.monitorApiCall('postUnvote');
  cy.get(`[data-cy-button=vote]`)
    .first()
    .then(el => el.get(0).click());
  cy.wait('@postUnvote');
});

then ('I see {string} button on card {string}', (buttonName, cardNumber) => {
  const button = getIdentifierButtonByName(buttonName);
  cy.get(`[data-cy-card-number=${cardNumber}] [data-cy-button=${button}]`)
    .should('be.visible');
});

then ('I don\'t see {string} button on card {string}', (buttonName, cardNumber) => {
  const button = getIdentifierButtonByName(buttonName);
  cy.get(`[data-cy-card-number=${cardNumber}] [data-cy-button=${button}]`)
    .should('not.visible');
});

when ('I go to card {string}', (cardNumber) => {
  let previewCard = 0;
  const nextWhileCardTargetNotDisplayed = () => {
    const currentCard = cy.get('[data-cy-card-number]');
    currentCard
      .then(card => {
        card
        .find('[data-cy-button=vote]')
        .first()
        .click()
      });

    currentCard
      .find('[data-cy-button=next-proposal], [data-cy-button=push-proposal-next], [data-cy-button=skip-sign-up], [data-cy-button=start-sequence]')
      .first()
      .then(el => el.get(0).click());
    
    const expectedCardNumber = (Number(previewCard)+1).toString();
    cy.waitUntil(() => cy.get(`[data-cy-card-number=${expectedCardNumber}]`).should('be.visible'));
    previewCard = expectedCardNumber;
    if (expectedCardNumber != cardNumber) {
      nextWhileCardTargetNotDisplayed();
    }
  };
  nextWhileCardTargetNotDisplayed();
});

then('card {string} is visible', (cardNumber) => {
  cy.get(`[data-cy-card-number=${cardNumber}]`)
    .should('be.visible')
});

then('card {string} is a proposal card', (cardNumber) => {
  cy.get(`[data-cy-card-number=${cardNumber}]`)
    .should('have.attr', 'data-cy-card-type', 'PROPOSAL_CARD');
});

then('card {string} is a final card', (cardNumber) => {
  cy.get(`[data-cy-card-number=${cardNumber}]`)
    .should('have.attr', 'data-cy-card-type', 'EXTRASLIDE_FINAL_CARD');
});

then('card {string} is an intro card', (cardNumber) => {
  cy.get(`[data-cy-card-number=${cardNumber}]`)
    .should('have.attr', 'data-cy-card-type', 'EXTRASLIDE_INTRO_CARD');
});

then('card {string} is a push proposal card', (cardNumber) => {
  cy.get(`[data-cy-card-number=${cardNumber}]`)
    .should('have.attr', 'data-cy-card-type', 'EXTRASLIDE_PUSH_PROPOSAL_CARD');
});

then('card {string} is a signup card', (cardNumber) => {
  cy.get(`[data-cy-card-number=${cardNumber}]`)
    .should('have.attr', 'data-cy-card-type', 'EXTRASLIDE_PUSH_SIGNUP_CARD');
});

then('progress gauge is {string} on {string}', (current, total) => {
  cy.get('[data-cy-container=progress]')
  .contains(`${current}/${total}`)
  cy.get('[data-cy-container=progress]')
    .contains(`Élément ${current} sur ${total}`);
});

then('I see {string} in the current card', (text) => {
  cy.get('[data-cy-card-number]')
    .should('contain', text);
});

then ('I see signup buttons in the current card', () => {
  cy.get('[data-cy-card-number]')
    .find('[data-cy-container=signup-auth-buttons] button:nth-child(1)')
    .should('contain', 'Email');
});

then('I see vote buttons on card {string}', (cardNumber) => {
  cy.get(`[data-cy-card-number=${cardNumber}] [data-cy-button=vote][data-cy-vote-key=agree]`)
    .should('have.length', 1)
    .and('be.visible');
  cy.get(`[data-cy-card-number=${cardNumber}] [data-cy-button=vote][data-cy-vote-key=disagree]`)
    .should('have.length', 1)
    .and('be.visible');
  cy.get(`[data-cy-card-number=${cardNumber}] [data-cy-button=vote][data-cy-vote-key=neutral]`)
    .should('have.length', 1)
    .and('be.visible');
});

then('I see vote buttons on the current card', () => {
  cy.get(`[data-cy-button=vote][data-cy-vote-key=agree]`)
    .should('have.length', 1)
    .and('be.visible');
  cy.get(`[data-cy-button=vote][data-cy-vote-key=disagree]`)
    .should('have.length', 1)
    .and('be.visible');
  cy.get(`[data-cy-button=vote][data-cy-vote-key=neutral]`)
    .should('have.length', 1)
    .and('be.visible');
});

then ('I see {string} voted proposal on the current card', (voteType) => {
  cy.get(`[data-cy-button=vote][data-cy-vote-key=${voteType}] svg`)
  .should('have.length', 1)
  .and('be.visible')
  .and('have.class', 'voted')
});

then('I see {string} qualified proposal on the current card', (qualificationType) => {
cy.get(`[data-cy-button=qualification][data-cy-qualification-key=likeIt]`)
  .should('have.length', 1)
  .and('be.visible')
  .and('have.class', 'qualified')
});

then('I see agree qualifications buttons on card {string}', (cardNumber) => {
  cy.get(`[data-cy-card-number=${cardNumber}] [data-cy-button=qualification]`)
    .should('have.length', 3);
  cy.get(`[data-cy-card-number=${cardNumber}] [data-cy-qualification-key=likeIt]`)
    .should('be.visible');
  cy.get(`[data-cy-card-number=${cardNumber}] [data-cy-qualification-key=doable]`)
    .should('be.visible');
  cy.get(`[data-cy-card-number=${cardNumber}] [data-cy-qualification-key=platitudeAgree]`)
    .should('be.visible');
});

then('I see disagree qualifications buttons on card {string}', (cardNumber) => {
  cy.get(`[data-cy-card-number=${cardNumber}] [data-cy-button=qualification]`)
    .should('have.length', 3);
  cy.get(`[data-cy-card-number=${cardNumber}] [data-cy-qualification-key=noWay]`)
    .should('be.visible');
  cy.get(`[data-cy-card-number=${cardNumber}] [data-cy-qualification-key=impossible]`)
    .should('be.visible');
  cy.get(`[data-cy-card-number=${cardNumber}] [data-cy-qualification-key=platitudeDisagree]`)
    .should('be.visible');
});

then('I see neutral qualifications buttons on card {string}', (cardNumber) => {
  cy.get(`[data-cy-card-number=${cardNumber}] [data-cy-button=qualification]`)
    .should('have.length', 3);
  cy.get(`[data-cy-card-number=${cardNumber}] [data-cy-qualification-key=doNotUnderstand]`)
    .should('be.visible');
  cy.get(`[data-cy-card-number=${cardNumber}] [data-cy-qualification-key=noOpinion]`)
    .should('be.visible');
  cy.get(`[data-cy-card-number=${cardNumber}] [data-cy-qualification-key=doNotCare]`)
    .should('be.visible');
});

then('I don\'t see qualification buttons on the current card', () => {
  cy.get('[data-cy-qualification-key]')
    .should('have.length', 0);
});

then('{string} qualification button is highlight on the current card', (qualificationType) => {
  cy.get(`[data-cy-button=qualification][data-cy-qualification-key=${qualificationType}]`)
    .first()
    .should('have.css', 'background-color', 'rgb(80, 122, 31)');
});

then('{string} qualification button is not highlight on the current card', (qualificationType) => {
  cy.get(`[data-cy-button=qualification][data-cy-qualification-key=${qualificationType}]`)
    .first()
    .should('have.not.css', 'background-color', 'rgb(80, 122, 31)');
});

then('total votes are equal to {string}', (voteCount) => {
  cy.get('[data-cy-container=sequence]')
    .should('contain', `${voteCount} votes`);
});

then('total {string} qualifications are equal to {string} on the current card',(qualificationType, total) => {
  cy.get(`[data-cy-button=qualification][data-cy-qualification-key=${qualificationType}]`)
    .first()
    .contains(total);
});