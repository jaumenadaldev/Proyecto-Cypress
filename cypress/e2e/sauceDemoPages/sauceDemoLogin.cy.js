before(function () {
    
    // ---- cargamos los datos de usuario
    cy.fixture('sauceDemoUsers').then(({
        users,
    }) => {
        user = users
    })

})