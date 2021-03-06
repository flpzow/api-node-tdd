const HttpResponse = require("../helpers/http-response");

module.exports = class LoginController {
  handle(httpRequest) {
    if(!httpRequest || !httpRequest.body) {
      return HttpResponse.serverError()
    }

    const { email, password } = httpRequest.body;
    if(!email) {
      return HttpResponse.badRequest('email')
    }

    if(!password) {
      return HttpResponse.badRequest('password')
    }
  }
}

