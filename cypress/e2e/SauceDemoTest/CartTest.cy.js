import SauceDemoLoginPage from "../../pages/SauceDemoLoginPage.cy.js"
import SauceDemoHome from "../../pages/SauceDemoHomePage.cy.js"
import Commons from "../../commons/commons.js"

const login = new SauceDemoLoginPage
const home = new SauceDemoHome
const commons = new Commons

// Variables 

const user = 'standard_user'
const password = 'secret_sauce'
const sauceLabsBackpack = '//*[@data-test="add-to-cart-sauce-labs-backpack"]'
const cartButton = '.shopping_cart_link'
const removeButton = '//*[@data-test="remove-sauce-labs-backpack"]'

describe('Shopping Cart Tests', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/') 
      login.login(user, password)
    })
  
    it('should add and remove a product from cart', () => {
      commons.click(sauceLabsBackpack)
      cy.wait(1000)
      cy.get(cartButton).click()
      cy.wait(1000)
      commons.click(removeButton)
    })
    
  })