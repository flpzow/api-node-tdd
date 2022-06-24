module.exports = class MissingParamError extends Error {
  contructor(paramName) {
    this.super(`Missing param: ${paramName}`);
    this.name = 'MissingParamError'
  }
}