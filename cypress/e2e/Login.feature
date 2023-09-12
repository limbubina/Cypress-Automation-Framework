@login @regression
Feature: Webdriveruniversity - Login Portal page

    Background: Pre condtions before each scenario
        Given I navigate to the webdriveruniversity login page
        #When I click on the Login Portal button
        #When I wait for 5 seconds

    Scenario Outline: Validate Login button
        And I type a '<username>' and a '<password>'
        And I click on the login button
        Then I should be presented with an alertbox with text '<message>'

        Examples:
            | username   | password     | message              |
            | webdriver  | webdriver123 | validation succeeded |
            | webdriver  | webdriver3   | validation failed    |
            | webdriver1 | webdriver123 | validation failed    |




