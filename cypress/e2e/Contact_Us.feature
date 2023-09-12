@contact-us @regression
Feature: Webdriveruniversity - Contact Us Page

    Background: Pre Conditions before each scenario
        Given I navigate to the webdriveruniversity homepage
        When I click on the contact us button

    Scenario: Valid Contact Us Form Submission
        And I type a first name
        And I type a last name
        And I enter an email address
        And I type a comment
        And I click on the Submit button
        Then I should be presented with a successful contact us submission message

    Scenario: Invalid Contact Us Form Submission
        And I type a first name
        And I type a last name
        And I type a comment
        And I click on the Submit button
        Then I should be presented with an unsuccessful contact us submission message

    Scenario: Valid Contact Us Form Submission - Using specific data
        And I type a specific first name "Mike"
        And I type a specific last name "Woods"
        And I type a specific email address "Mike_woods1@mail.com"
        And I type a specific word "Hello World" and number 6788 within the comment input field
        And I click on the Submit button
        Then I should be presented with a successful contact us submission message

    @smoke
    Scenario Outline: Validate contact us page
        And I type a first name <firstName> and a last name '<lastName>'
        And I enter an email address '<emailAddress>' and a comment '<comment>'
        And I click on the Submit button
        Then I should be presented with header text '<message>'

        Examples:
            | firstName | lastName | emailAddress   | comment             | message                      |
            | John      | Done     | john@email.com | Hello, how are you? | Thank You for your Message!  |
            | Mia       | Carter   | Mia@email.com  | Comment here test   | Thank You for your Message!  |
            | Grace     | Hudson   | Grace_hudson   | This should fail    | Error: Invalid email address |



