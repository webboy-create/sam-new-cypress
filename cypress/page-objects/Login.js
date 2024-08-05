

export class Login {

    loginForm = (username, password) =>{
        
        cy.get('#username').type(username);
        cy.get('#password').type(password);
        cy.get('#loginButton').click();

    }

}