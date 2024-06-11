import Commons from "../commons/commons"

const commons = new Commons

class SauceDemoCheckoutPage{
    fillthefields(name, lastName, postalCode){
        commons.type('//*[@data-test="firstName"]', name)
        commons.type('//*[@data-test="lastName"]', lastName)
        commons.type('//*[@data-test="postalCode"]', postalCode)
    }
}

export default SauceDemoCheckoutPage