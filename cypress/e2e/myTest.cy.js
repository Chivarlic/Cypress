describe('My first test', () => {
   
    it('Lets visit the page', () =>{
        cy.visit('https://www.google.com');
       
    })
    
    it('open the orang hrm', () =>{
        cy.visit('https://opensource-demo.orangehrmlive.com');
        cy.title().should('eq','OrangeHRM');
       
    })

})