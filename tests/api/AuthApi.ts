import { APIRequestContext } from '@playwright/test';

class AuthApi {
    private apiContext: APIRequestContext;

    constructor(apiContext: APIRequestContext) {
        this.apiContext = apiContext;
    }

    async login(email: string, password: string) {
        const response = await this.apiContext.post('https://api.eventhub.rahulshettyacademy.com/api/auth/login', {
            data: { email, password }
        }
        );
        return response;
    }

}
export default AuthApi;