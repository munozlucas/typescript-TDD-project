import { HttpRequest, HttpResponse } from '../interfaces/http-interface'

export class RegisterVehicle {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredProperties = ['name', 'model', 'year', 'color']

    for (const prop of requiredProperties) {
      if (!httpRequest.body[prop]) {
        return {
          statusCode: 400,
          body: new Error(`error in the: ${prop}`)
        }
      }
    }
    return {
      statusCode: 200,
      body: ''
    }
  }
}
