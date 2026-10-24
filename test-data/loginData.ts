
export const loginData ={
    validUser: {

    email: 'validuser@gmail.com',
    password: 'Test@1234'
  },


    invalidLoginData: [
    
    {
        name: 'invalidPassword',
        email: 'validuser@gmail.com',
        password: 'Invalid@123'
    },
    {
        name: 'invalidEmail',
        email: 'anotheruser2@gmail.com',
        password: 'Test@1234'
    },
     {
        name: 'bothInvalid',
        email: 'test@gmail.com',
        password: 'Invalid@232'
    }

]
};