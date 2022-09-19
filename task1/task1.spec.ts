import { test, expect } from "@playwright/test";
import RegistrationPage from "../pages/registrationPage";
import TopMenuPage from "../pages/topmenuPage";
import SearchPage from "../pages/searchPage"

test('should have title "Overview - Redmine"', async ({ page }) => {
  const registrationPage = new RegistrationPage (page);
  await page.goto('https://www.redmine.org/');
  // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle('Overview - Redmine');
  })

test('should go to Registration page after click on register link on top-menu', async ({ page }) => {
  const topMenuPage = new TopMenuPage (page);
  await page.goto('https://www.redmine.org/');
  await topMenuPage.registerButtonClick();
  // Expect a page is navigated to Registration page 
  await expect(page).toHaveURL('https://www.redmine.org/account/register');
    });

test('should Registration be filled required field with valid data', async ({page}) => {
  const registrationPage = new RegistrationPage (page);
  // User could fill required field with valid data
  await page.goto('https://www.redmine.org/account/register');
  await registrationPage.registerInputData();
  // User could click on submit button after filling required field
  await registrationPage.btnSubmitClick();
  // Expect a page is navigated to Login page 
  await expect(page).toHaveURL('https://www.redmine.org/login');
  });
test('should search topics by search feild', async ({ page }) => {
  const searchPage = new SearchPage (page);
  const topMenuPage = new TopMenuPage(page);
  await page.goto('https://www.redmine.org/');
  await topMenuPage.getResultSearch();
  // Expect a page is navigated to Search page 
  await expect(page).toHaveURL('https://www.redmine.org/projects/redmine/search?utf8=%E2%9C%93&wiki_pages=1&q=documentation');
  // Expect Search results contain 'documentation')  
   // await expect(searchPage.searchResult).toContain('documentation');
});
test('should have clickable all menu items', async ({page}) => {
  await page.goto('https://www.redmine.org/');
  const topMenuPage = new TopMenuPage(page);
  await page.goto('https://www.redmine.org/');
  async function checkMainMenu() {
    const mainMenu = [page.$$('#main-menu ul li')];
  for await (const item of mainMenu) {
   console.log('Menu Items are: ' + item);
  }
}
});

