import { should } from "chai";

export function shouldContain(selector: string, ...expectedText: string[]): void {
    expectedText.forEach((text) => {
        cy.get(selector).should('contain.text', text);
    });
}
export function shouldNotHaveText(selector: string, ...expectedText: string[]): void {
    expectedText.forEach((text) => {
        cy.get(selector).should('not.have.text')
    })
}
export function currentUrlShouldEqual(url: string): void{
    cy.url().should('eq', url);
}
export function currentUrlShouldContain(urlLocation: string): void {
    cy.url().should('contain', urlLocation);
}
export function shouldTextBeCorrect(selector: string, expectedText: string): void {
    cy.get(selector).should('be.visible').should('have.text', expectedText);
}
export function shouldBeInvisible(selector: string): void {
    cy.get(selector).should('not.be.visible');
}
export function shouldHrefEquals(selector: string, href: string): void {
    cy.get(selector).should('have.attr','href').and('eq',href);
}
export function shouldHaveClassName(selector: Cypress.Chainable<JQuery<HTMLElement>> | string, clasName: string): void {
   getElement(selector).should('have.class', clasName)
}
export function shouldNotHaveClassName(selector: string, className: string): void {
    cy.get(selector).should('not.have.class',className);
}
export function shouldElementExist(selector: string): void {
    cy.get(selector).should('exist');
}
export function shouldElementNotExist(selector: string): void {
    cy.get(selector).should('not.exist');
}
export function shouldElementHaveAttribute(selector: string, attribute: string, value?: any): void {
    if(value){
        cy.get(selector).should('have.attr', attribute).and('eq',value);
    } else {
        cy.get(selector).should('have.attr', attribute);
    }
}
export function shouldElementNotHaveAttribute(selector: string, attribute: string): void {
        cy.get(selector).should('not.have.attr', `${attribute}`);
}
export function shouldEachItemHaveAttribute(selector: string, attribute: string, value?: any): void {
        cy.get(selector).each(($selector: any) => {
            shouldElementHaveAttribute($selector,attribute, value);
        })
}
export function getElement(selector: Cypress.Chainable<JQuery<HTMLElement>> | string ) {
    return typeof selector === 'string' ? cy.get(selector) : selector;
}