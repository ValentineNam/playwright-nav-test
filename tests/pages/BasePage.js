import { expect } from '@playwright/test';

export class BasePage {
  constructor(page) {
    this.page = page;
    this.header = this.page.locator('h1');
    this.linkHome = this.page.locator('a[href="index.html"]');
    this.linkAbout = this.page.locator('a[href="about.html"]');
    this.linkContact = this.page.locator('a[href="contact.html"]');
  }

  // Navigations
  async navigateToHome() {
    await this.linkHome.click();
  }

  async navigateToAbout() {
    await this.linkAbout.click();
  }

  async navigateToContact() {
    await this.linkContact.click();
  }
  // End region

  // Checks
  async checkSingleH1() {
    const h1s = await this.page.$$('h1');
    expect(h1s.length).toBe(1);
  }
  // End region
}