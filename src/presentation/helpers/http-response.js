const MissingParamError = require('../../utils/errors/missing-param-error')
const { UnauthorizedError, ServerError } = require('../errors')

module.exports = class HttpResponse {
  static ok(body) {
    return {
      statusCode: 200,
      body
    }
  }

  static badRequest(paramName) {
    return {
      statusCode: 400,
      body: new MissingParamError(paramName)
    }
  }

  static unauthorizedError() {
    return {
      statusCode: 401,
    }
  }

  static serverError() {
    return {
      statusCode: 500,
    }
  }
}