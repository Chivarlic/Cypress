import { beforeEach, describe, it } from "mocha";
import { Login } from "../../pages/login";
import { visit } from "../../support/commonFeature";

const log= new Login();

describe('As a user , I want to Login', () => {
    beforeEach(() => {
        visit();
    });
 it('I can login successfully', () => {
    log.enterUserName();
    log.enterPassword();
    log.clickLogin();
 });
});