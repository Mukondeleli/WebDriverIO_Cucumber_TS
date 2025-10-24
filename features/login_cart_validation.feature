Feature: Login and Cart Functionality

  Scenario: Login, Add and remove a product from the cart
    Given user on SauceDemo login page
    When user log in with username "<username>" and password "<password>"
    And user add the "<productName>" to the cart
    Then user should see the "<productName>" in the cart
    When user remove the "<productName>" from the cart
    Then the cart should be empty

    Examples:
      | username      | password     | ProductName             |
      | standard_user | secret_sauce | Sauce Labs Bolt T-Shirt |
