import { test, expect } from '@playwright/test';
import { IndexPage } from './pages/indexPage.js';
import { AboutPage } from './pages/aboutPage.js';
import { ContactPage } from './pages/contactPage.js';

test.describe('Site navigation tests', () => {
  let page;
  let indexPage, aboutPage, contactPage;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    indexPage = new IndexPage(page);
    aboutPage = new AboutPage(page);
    contactPage = new ContactPage(page);
  });

  test('Open home page', async () => {
    await indexPage.goto(); // переход по / (должен открывать Home)
    await indexPage.isLoaded(); // проверка заголовка h1 с текстом Home
    await indexPage.checkSingleH1() // проверка, что на экране только 1 заголовок h1
  });

  test('Navigate from Home to About and verify h1 and URL', async () => {
    await indexPage.goto();
    await indexPage.isLoaded();

    // Переход на About
    await indexPage.navigateToAbout();
    await expect(page).toHaveURL(/about\.html$/); // проверка что текущий урл = about.html
    await aboutPage.isLoaded(); // проверка заголовка h1 с текстом About
  });

  test('Navigate from Home to Contact and verify h1 and URL', async () => {
    await indexPage.goto();
    await indexPage.isLoaded();

    // Переход на Contact
    await aboutPage.navigateToContact();
    await expect(page).toHaveURL(/contact\.html$/); // проверка что текущий урл = contact.html
    await contactPage.isLoaded(); // проверка заголовка h1 с текстом Contact
  });

  test('Navigate from About to Home and verify h1 and URL', async () => {
    await page.goto('/about.html');
    await aboutPage.isLoaded();

    // Переход на Home
    await aboutPage.navigateToHome();
    await expect(page).toHaveURL(/index\.html$/); // проверка что текущий урл = index.html
    await indexPage.isLoaded(); // проверка заголовка h1 с текстом Home
  });
});