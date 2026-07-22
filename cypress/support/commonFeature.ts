import ViewportPreset = Cypress.ViewportPreset;
export function visit(url?: string): void{
    if(url){
        cy.visit(`/${encodeURI(url)}`)
    } else{
    cy.get('/');
    }
}
export function visitOnMobile(): void{
    cy.viewport('iphone-xr');
    cy.visit('/');
}
export function useMobileDevice(userAgent?: ViewportPreset): void{
    cy.viewport(userAgent ?? 'iphone-xr');
}
export function setCookie(key: string, value: string): void{
    cy.setCookie(key, value);
}