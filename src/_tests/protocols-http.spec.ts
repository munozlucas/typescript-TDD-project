import { InvalidArgument } from '../errors/invalid-arg'
import { UrlLogin } from '../protocols/protocols-http'

describe('Protocols HTTP and Querys', () => {
  test('URL login', () => {
    const parsedUrl = UrlLogin.parseUrl('http://localhost:3000/login')

    expect(parsedUrl.href).toBe('http://localhost:3000/login')
    expect(parsedUrl.port).toBe('3000')
  })

  test('Response Query login', () => {
    const parsedUrl = UrlLogin.parseUrl('http://localhost:3000/login?user=user&password=password')
    const expectAuth = {
      user: 'user',
      password: 'password'
    }
    expect(parsedUrl.query).toEqual(expectAuth)
  })

  test('URL user', () => {
    const parsedUrl = UrlLogin.parseUrl('http://localhost:3000/user')

    expect(parsedUrl.href).toBe('http://localhost:3000/user')
    expect(parsedUrl.port).toBe('3000')
  })

  test('Response Query user', () => {
    const parsedUrl = UrlLogin.parseUrl(
      'http://localhost:3000/user?user=user&password=password&name=name&lastname=lastname'
    )
    const expectAuth = {
      user: 'user',
      password: 'password',
      name: 'name',
      lastname: 'lastname'
    }
    expect(parsedUrl.query).toEqual(expectAuth)
  })

  test('Invalid URL', () => {
    function expectError (): void {
      UrlLogin.parseUrl('')
    }

    expect(expectError).toThrowError(new InvalidArgument(''))
  })
})
