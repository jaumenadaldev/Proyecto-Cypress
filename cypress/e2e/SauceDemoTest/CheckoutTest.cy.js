import SauceDemoLoginPage from "../../pages/SauceDemoLoginPage.cy.js"
import SauceDemoHome from "../../pages/SauceDemoHomePage.cy.js"
import Commons from "../../commons/commons.js"
import SauceDemoCheckoutPage from "../../pages/SauceDemoCheckoutPage.cy.js"

const login = new SauceDemoLoginPage
const home = new SauceDemoHome
const checkout = new SauceDemoCheckoutPage
const commons = new Commons

// Variables 
const user = 'standard_user'
const password = 'secret_sauce'
const sauceLabsBackpack = '//*[@data-test="add-to-cart-sauce-labs-backpack"]'
const cartButton = '.shopping_cart_link'
const checkoutPage = '//*[@data-test="checkout"]'
const name = "Jaume"
const lastName = "Nadal"
const postalCode = "07620"
const checkoutLabel = '.cart_item'


describe('Visiting SauceDemo Test', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/') 
      home.login(user, password)
      })

    it('should add to cart, go to checkout, fill fields, and complete the order', () => {
      commons.click(sauceLabsBackpack)
      cy.wait(1000)
      cy.get(cartButton).click()
      cy.wait(1000)
      commons.click(checkoutPage)
      cy.wait(1000)
      checkout.fillthefields(name, lastName, postalCode)
      commons.click('//*[@data-test="continue"]')
      commons.click('//*[@data-test="finish"]')
    })

    it('check if the product appers on checkout page', () => {
      commons.click(sauceLabsBackpack)
      cy.get(cartButton).click()
      commons.click(checkoutPage)
      checkout.fillthefields(name, lastName, postalCode)
      commons.click('//*[@data-test="continue"]')
      cy.get(checkoutLabel).should('contain', 'Backpack')
    })
  })
  