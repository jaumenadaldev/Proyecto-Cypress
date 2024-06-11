import SauceDemoLoginPage from "../../pages/SauceDemoLoginPage.cy.js"
import Commons from "../../commons/commons.js"

const login = new SauceDemoLoginPage
const commons = new Commons

// Variables 

const user = "standard_user"
const password = "secret_sauce"
const userLocked =  "locked_out_user"
const userMissing = ""

// Mensajes de error

const lockedUserMessage = "user has been locked"
const missingUserMessage = "required"

describe('Visiting SauceDemo Test', () => {
    beforeEach(() => {
        cy.viewport('macbook-15')
        cy.visit('https://www.saucedemo.com/')
    })

    it('user loging', () => {
        login.login(user, password)
})
    it('checking the error messages when the user is locked', () => {
        login.login(userLocked, password)
        login.errorMessages(lockedUserMessage)
    })

    //it('checking the error messages when the user is missing', () => {
    //    home.login(userMissing, password)
    //    home.errorMessages(missingUserMessage)
    //})

})