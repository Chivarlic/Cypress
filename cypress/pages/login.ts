export class Login{
    private username: string = '#user-name';
    private pwd: string = '#password';
    private loginBtn: string = 'login-button';
    private page: any;
    Login(page: any){
        this.page=page;
    }
    visit(): void{
        cy.get('https://www.saucedemo.com/');
    }
    
    enterUserName(): void{
        cy.get(this.username).type("standard_user");
    }
    enterPassword(): void{
        cy.get(this.pwd).type("secret_sauce");
    }
   clickLogin(): void{
        cy.get(this.loginBtn).click();
    }
}