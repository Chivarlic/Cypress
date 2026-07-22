describe('my second test', () => {
 
it('examples for css selectors', () => {
    cy.visit('https://testautomationpractice.blogspot.com/');
    cy.get('#name').type('rony');
    cy.get('#email').type('rony@example.com');
    cy.get('#phone').type('1234567890');
    cy.get('#textarea').type('hi buddy whats up');
})
 
 it('examples for xpath selectors',() => {
  cy.xpath('//input[@value="male"]').click();
  cy.xpath('//input[@value="sunday"]').click();
 })

 
      
})