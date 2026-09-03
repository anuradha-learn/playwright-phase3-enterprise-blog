import fs from 'fs';
import path from 'path';

export interface Identity {
  id: string;
  email: string;
  password: string;
}

export class IdentityProvider {
  load(): Identity[] {
    const raw = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'users.template.json'), 'utf-8'));
    return raw.map((u: any) => ({
      id: u.id,
      email: process.env[u.emailEnv]!,
      password: process.env[u.passwordEnv]!,
    }));
  }
}