export const invalidLoginData = [
  {
    name: 'Invalid email',
    email: 'unknownuser@example.com',
    password: process.env.EVENTHUB_PASSWORD!,
  },
  {
    name: 'Invalid password',
    email: process.env.EVENTHUB_EMAIL!,
    password: 'WrongPassword123',
  },
  {
    name: 'Both invalid',
    email: 'unknownuser@example.com',
    password: 'WrongPassword123',
  },
];
