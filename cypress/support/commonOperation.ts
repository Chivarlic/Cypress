export function typeValue(selector: string, inputText: string): void {
    cy.get(selector).type(inputText);
}
export function typeValueThenEnter(selector: string, inputText: string): void {
    cy.get(selector).type(inputText).type('{Enter}');
}
export function clearExistingValueThenTypeNewValue(selector: string, previousText: string, inputText: string): void {
    cy.get(selector)
    .should('have.value', previousText)
    .clear()
    .should('have.valur', '')
    .type(inputText)
    .should('have.value', inputText)
}
export function click(selector: string): void{
    cy.get(selector).click();
}
export function clickLastChild(selector: string): void{
    cy.get(selector).should('be.visible').last().click();
}
export function goBackToPreviousPage(selector: string): void{
    cy.go(-1);
}