import { Page } from "@playwright/test"
import { faker } from "@faker-js/faker"
import GenerateDataPage from "./generatedataPage";
  export default class RegistrationPage {
    
    constructor(public page: Page) { }
  
    async registerInputData() {
      const userLogin = "UserLogin" + Math.random().toString().slice(2, 7)
      const email = `${userLogin}@gmail.com`
      const firstName = faker.name.firstName()
      const lastName = faker.name.lastName()
      const password = Math.random().toString().slice(2,7)
      const inputUserLogin = this.page.locator('#user_login')
      await inputUserLogin.waitFor({state:"visible"});
      await inputUserLogin.fill(userLogin)
        await this.page.locator('#user_password').fill(password);
        await this.page.locator('#user_password_confirmation').fill(password);
        await this.page.locator('#user_firstname').fill(firstName);
        await this.page.locator('#user_lastname').fill(lastName);
        await this.page.locator('#user_mail').fill(email);
    }
    async btnSubmitClick() {
      const btnSubmit = this.page.locator('[type="submit"]')
        await btnSubmit.click();
    }

}

