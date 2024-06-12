import { test, expect } from '@playwright/test';
import axios from 'axios';

test.describe('Post Request', () => {

    const baseUrl = 'https://reqres.in/api';

    test('Verify response when valid credentials are given', async () => {


        const response = await axios.post(`${baseUrl}/register`, {
            email: 'eve.holt@reqres.in',
            password: 'pistol'
        });


        expect(response.status).toBe(200);

        expect(response.data).toHaveProperty('id');
    })
    test.only('Verify response when invalid credentials are given', async () => {

        const response = await axios.post(`${baseUrl}/register`, {
            email: '-@reqres.in',
            password: 'pisto'

        });
        expect(response.status).toBe(400);

    })

});



