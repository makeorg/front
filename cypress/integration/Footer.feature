Feature: The footer
  I want to check footer component

  Scenario: Footer is present in all pages
    Given I go to "homepage"
    Then I see "footer" container
    When I go to "sequence" page of the question "question-3-slug"
    Then I see "footer" container
    When I go to "data policy"
    Then I see "footer" container
    When I go to "browse consultations"
    Then I see "footer" container
    When I go to "browse results"
    Then I see "footer" container
    When I go to "top idea" page of the question "question-1-slug"
    Then I see "footer" container
    When I go to 404 FR page
    Then I see "footer" container
    When I go to 404 page
    Then I don't see "footer" container
  
  Scenario: French Mobile Footer is complete
    Given I go to "france homepage"
    Then I see a link "Conditions d'utilisation" to "/FR/conditions-dutilisation" in "footer" container
    And I see an external link "Mentions légales" to "https://about.make.org/legals-place/mentions-legales" in "footer" container
    And I see an external link "Politique de données" to "https://about.make.org/legals-place/politique-donnees" in "footer" container
    And I see an external link "Contact" to "https://about.make.org/legals-place/contact" in "footer" container