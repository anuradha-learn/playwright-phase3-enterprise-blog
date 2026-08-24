export interface Identity {
  id: string;
  email: string;
  password: string;
}

export class IdentityProvider {
  load(): Identity[] {
    return [
      { id: 'user1', email: process.env.TEST_USER_1_EMAIL!, password: process.env.TEST_USER_1_PASSWORD! },
      { id: 'user2', email: process.env.TEST_USER_2_EMAIL!, password: process.env.TEST_USER_2_PASSWORD! },
      { id: 'user3', email: process.env.TEST_USER_3_EMAIL!, password: process.env.TEST_USER_3_PASSWORD! },
      { id: 'user4', email: process.env.TEST_USER_4_EMAIL!, password: process.env.TEST_USER_4_PASSWORD! },
    ];
  }
}