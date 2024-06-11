import Commons from "../commons/commons"

const common = new Commons

// Locators
let loginPage = ''

// Users 
let userJson

before(function () {
    // cargamos elementos del DOM
    cy.fixture('sauceDemoLocators').then(({
        loginPageLocators,
    }) => {
        loginPage = loginPageLocators
    })
})

class SauceDemoLoginPage{

    loginUser(username, password) {
        common.type(loginPage.username_input, username)
        common.type(loginPage.password_input, password)
        common.click(loginPage.login_button)
    }
}

export default SauceDemoLoginPage