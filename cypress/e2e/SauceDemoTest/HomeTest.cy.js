import SauceDemoLoginPage from "../../pages/SauceDemoLoginPage.cy.js"
import SauceDemoHome from "../../pages/SauceDemoHomePage.cy.js"
import Commons from "../../commons/commons.js"

const login = new SauceDemoLoginPage
const home = new SauceDemoHomePage
const commons = new Commons

// Variables

const user = "standard_user"
const password = "secret_sauce"
const sauceLabsBackpack = '//*[@data-test="add-to-cart-sauce-labs-backpack"]'
const cartButton = '.shopping_cart_link'

describe('Home Tests', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/') 
      login.login(user, password)
    })
  
    it('should add and check a product from home', () => {
      commons.click(sauceLabsBackpack)
      cy.get('.shopping_cart_badge').should('have.text', '1')
    })
    
  })
  
