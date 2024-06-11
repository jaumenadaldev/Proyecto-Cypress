import SauceDemoLoginPage from "../../pages/SauceDemoLoginPage.cy.js";
import SauceDemoHome from "../../pages/SauceDemoHomePage.cy.js";
import Commons from "../../commons/commons.js";

const login = new SauceDemoLoginPage
const home = new SauceDemoHome
const commons = new Commons

// Variables 
const user = 'standard_user'
const password = 'secret_sauce'
const sauceLabsBackpack = '//*[@data-test="add-to-cart-sauce-labs-backpack"]'
const removeButton = '//*[@data-test="remove-sauce-labs-backpack"]'

describe("Verify button color change", () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/') 
      home.login(user, password)
      })
  
    it("Add and verify button color change", () => {
      commons.click(sauceLabsBackpack)
      cy.wait(1000)
    cy.xpath('//*[@data-test="remove-sauce-labs-backpack"]')
      .should("have.class", "btn_secondary") // Verificar que tenga la clase .btn_secondary
      .should("have.css", "color", "rgb(226, 35, 26)"); // Verificar el nuevo color (rojo)    
    });
  });
  