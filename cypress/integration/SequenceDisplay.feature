Feature: Sequence display
  I want to track display sequence 
  Background: 
    Given monitor api requests
  Scenario: Track display on sequence
    Given I monitor API "postTracking" requests
    When I go to "sequence page" of the question "question-0-slug"
    Then event "display-sequence" should be tracked by Make with parameters values:
      | name                | value                                                               |
      | eventType           | trackCustom                                                         |
      | country             | FR                                                                  |
      | language            | fr                                                                  |
      | source              | core                                                                |
      | location            | sequence                                                            |
      | questionId          | question-0-id                                                       |
      | questionSlug        | question-0-slug                                                     |
      | referrer            | http://localhost:9009/__/                                           |
      | url                 | http://localhost:9009/FR-fr/consultation/question-0-slug/selection  |
    And event "display-intro-card" should be tracked by Make with parameters values:
      | name                | value                                                               |
      | eventType           | trackCustom                                                         |
      | source              | core                                                                |
      | location            | sequence                                                            |
      | questionId          | question-0-id                                                       |
      | questionSlug        | question-0-slug                                                     |
      | country             | FR                                                                  |
      | language            | fr                                                                  |
    And event "click-start-sequence" should not be tracked by Make
  Scenario: Track start sequence after click on intro card button
    Given I monitor API "postTracking" requests
    And I am on "sequence page" of the question "question-0-slug"
    When I click on "intro card start button" of the sequence
    Then event "click-start-sequence" should be tracked by Make with parameters values:
      | name                | value                                                               |
      | eventType           | trackCustom                                                         |
      | country             | FR                                                                  |
      | language            | fr                                                                  |
      | source              | core                                                                |
      | location            | sequence                                                            |
      | questionId          | question-0-id                                                       |
      | questionSlug        | question-0-slug                                                     |
      | referrer            | http://localhost:9009/__/                                           |
      | url                 | http://localhost:9009/FR-fr/consultation/question-0-slug/selection  |
    And card "1" is visible
    And card "1" is a proposal card
    And progress gauge is "1" on "15"