module.exports = class LoginController {
  handle(httpRequest) {
    const { email, password } = httpRequest.body;
    if(!email || !password) {
      return {
        statusCode: 400
      }
    }
  }
}

