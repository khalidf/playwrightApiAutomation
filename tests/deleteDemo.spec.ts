import { test, expect, request} from '@playwright/test';

test.describe('Delete Test cases', () => {
  const baseUrl = 'https://reqres.in/api';

  test('Verify user is deleted', async ({ request }) => {
    const response = await request.delete(`${baseUrl}/users/2`);
    expect(response.status()).toBe(204);
  });
});