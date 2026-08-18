import { Browser } from '@playwright/test';
import path from 'path';
import { LoginPage } from '../pages/LoginPage';
import { Identity } from './IdentityProvider';

export class AuthenticationManager {
  constructor(private browser: Browser, private baseUrl: string) {}

  async authenticateAndSave(identity: Identity): Promise<string> {
    const context = await this.browser.newContext();
    const page = await context.newPage();
    const loginPage = new LoginPage(page);

    await loginPage.navigate(this.baseUrl);
    await loginPage.login(identity.email, identity.password);
    await loginPage.verifyLoggedIn();

    const filePath = path.join(__dirname, 'storage', `${identity.id}.json`);
    await context.storageState({ path: filePath });
    await context.close();

    return filePath;
  }
}