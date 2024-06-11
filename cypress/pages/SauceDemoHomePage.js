import commons from '../../pages/commons'
const commons = new commons

class SauceDemoHome{

    login(user,pass){
        commons.type('[data-test="username"]', user)
        
        //cy.get('[data-test="username"]').type(user)
        cy.get('[data-test="password"]').type(pass)
        cy.xpath("//input[@id='login-button']").click()
    }

}

export default SauceDemoHome