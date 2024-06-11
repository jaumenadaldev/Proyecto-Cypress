class Commons{
    validateElementText(element, text, position){
        this.findElement(element, position).should('have.text', text)
    }

    validateElementBeVisible(element){
        cy.xpath(element).should('be.visible')
    }

    validateHaveLength(element,valor, position){
        this.findElement(element, position).should('have.length', valor)
    }

    validateElementNotExist(element,position){
        this.findElement(element, position).should('not.exist')
    }
 
    
    selectByText(element, text, position){
        this.findElement(element, position).select(text)
    }

    findElement(element, position){
        if(position!=null){
             return cy.xpath(element).eq(position)
        }else{
             return cy.xpath(element)
        } 
    }

    click(element, position){
        this.findElement(element, position).click()
    }

    clickForce(element, position){
        this.findElement(element, position).click({force:true})
    }

    type(element, text, options ,position){
        switch (options) {
            case "enter":
                this.findElement(element,position).type(text).type('{enter}')
                break;
        
            default:
                this.findElement(element,position).type(text)
                break;
        }
    }

    validateURL(text){
        cy.url().should('contain', text)
    }

    navigateToURL(url){
        cy.visit(url)
    }
}
export default Commons