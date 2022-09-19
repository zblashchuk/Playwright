import { Page } from "@playwright/test"

  export default class SearchPage {
  
    constructor(public page: Page) { }


  
    async searchResult() {
      const searchResult = this.page.locator('#search-results')
    
}

}


