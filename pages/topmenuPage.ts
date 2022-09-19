import { Page } from "@playwright/test"

  export default class TopMenuPage {
  
    constructor(public page: Page) { }

    async registerButtonClick() {
    await this.page.locator('.register').click();
}
  async getResultSearch() {
  const searchField = this.page.locator('#q')
  await searchField.click()  
  await searchField.fill('documentation');
  await searchField.press('Enter')
}


  }
