const LoginController = require("./login-controller.js");

describe('Login Controller', () => {
  test('should return 400 if no email is provided', () => {
    const sut = new LoginController();

    const httpRequest = {
      body: {
        password: 'any_password'
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })

  test('should return 400 if no password is provided', () => {
    const sut = new LoginController();

    const httpRequest = {
      body: {
        email: 'any_email@mail.com',
      }
    }

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})