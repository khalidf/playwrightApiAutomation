import { test, expect } from '@playwright/test';
import axios from 'axios';

test('Update user information', async () => {
  const userId = 2; // ID of the user to update
  const apiUrl = `https://reqres.in/api/users/${userId}`;

  const response = await axios.put(apiUrl, {
    name: 'Bob',
    job: 'dentist',
  });


  expect(response.status).toBe(200);


});
