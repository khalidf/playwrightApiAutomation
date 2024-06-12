import { test, expect } from '@playwright/test';
import { performance } from 'perf_hooks'; // Importing performance from perf_hooks

test.describe('GET API', () => {
  const baseUrl = 'https://reqres.in/api';
  const maxDuration = 3000;

  test('Verify response when valid url and valid request method is given', async ({ request }) => {
    const startTime = performance.now();

    const response = await request.get(`${baseUrl}/users?page=2`);

    const endTime = performance.now();
    const duration = endTime - startTime;

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody).toHaveProperty('page', 2);
    expect(responseBody).toHaveProperty('per_page', 6);
    expect(responseBody).toHaveProperty('total', 12);
    expect(responseBody).toHaveProperty('total_pages', 2);
    expect(responseBody).toHaveProperty('data');
    expect(responseBody).toHaveProperty('support');

    const users = responseBody.data;
    expect(Array.isArray(users)).toBeTruthy();
    expect(users.length).toBe(6);

    users.forEach((user: any) => {
      expect(user).toHaveProperty('id');
      expect(user).toHaveProperty('email');
      expect(user).toHaveProperty('first_name');
      expect(user).toHaveProperty('last_name');
      expect(user).toHaveProperty('avatar');
    });

    const support = responseBody.support;
    expect(support).toHaveProperty('url', 'https://reqres.in/#support-heading');
    expect(support).toHaveProperty('text', 'To keep ReqRes free, contributions towards server costs are appreciated!');

    expect(duration).toBeLessThan(maxDuration);
  });

  test.only('Verify  response body when when invalid page number is given',async({request})=>
  {
const response=await request.get(`${baseUrl}/users?page=22`)
expect(response.status()).not.toBe(200);
const responseBody = await response.json();
expect(responseBody).not.toHaveProperty('page', 2);
expect(responseBody).not.toHaveProperty('per_page', 6);
expect(responseBody).not.toHaveProperty('total', 12);
expect(responseBody).not.toHaveProperty('total_pages', 2);
expect(responseBody).not.toHaveProperty('data');
expect(responseBody).not.toHaveProperty('support');
  });
});
