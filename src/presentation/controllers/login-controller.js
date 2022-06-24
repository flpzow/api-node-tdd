module.exports = class LoginController {
  handle(httpRequest) {
    if(!httpRequest.body.email || !httpRequest.body.password) {
      return {
        statusCode: 400
      }
    }
  }
}

