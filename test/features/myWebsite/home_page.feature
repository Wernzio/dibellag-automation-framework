Feature: Contact me for more info.

  Scenario: Verify home page logo.
    Given I go to yousuf art project website
    Then I should see art project main logo

  Scenario: Verify the headline.
    Given I go to yousuf art project website
    Then I see headline
    """
      WELCOME TO BHUIYAN ARTWORK
    """

  Scenario: Verify all the taps on homepage.
    Given I go to yousuf art project website
    Then I see home page log
    And I see all the available tabs
      | MYWORK     |
      | SUDOERS    |
      | ARTWORK    |
      | VIDEO      |
      | CONTACT-ME |
