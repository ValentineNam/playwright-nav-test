import { BasePage } from './BasePage';
import { expect } from '@playwright/test';

export class ContactPage extends BasePage {
  constructor(page) {
    super(page);
  }

  async isLoaded() {
    // считаем, что если заголовок прогрузился, то прогрузилась и страница
    await expect(this.header).toHaveText('Contact');
  }
}