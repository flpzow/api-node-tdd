const MissingParamError = require("../../utils/errors/missing-param-error.js");
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
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
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
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
  })

  test('should return 500 if no httpRequest is provided', () => {
    const sut = new LoginController();
    const httpResponse = sut.handle()
    expect(httpResponse.statusCode).toBe(500)
  })

  test('should return 500 if no httpRequest has no body', () => {
    const sut = new LoginController();

    const httpRequest = {}

    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(500)
  })
})