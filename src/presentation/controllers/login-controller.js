module.exports = class LoginController {
  handle(httpRequest) {
    if(!httpRequest || !httpRequest.body) {
      return {
        statusCode: 500,
      }
    }

    const { email, password } = httpRequest.body;
    if(!email || !password) {
      return {
        statusCode: 400
      }
    }
  }
}

