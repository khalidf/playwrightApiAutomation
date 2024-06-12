import { test, request, expect } from '@playwright/test';

test.describe('Patch Test cases', () => {

    const baseUrl = 'https://reqres.in/api';

    test('Verify user details are updated', async ({ request }) => {

        const payload = {

            name: 'Bob',
            job: 'Dentist'
        }

        const response = await request.patch(`${baseUrl}/users/2`, {

            data: payload
        })

        expect(response.status()).toBe(200)

        const responseBody = await response.json()
        expect(responseBody).toHaveProperty('name', 'Bob')
        expect(responseBody).toHaveProperty('job', 'Dentist')


    })
})