/**
 * Support type-safe string dot notation
 * author phillyx
 * email 1020450921@qq.com
 * ts playground
 * https://www.typescriptlang.org/play?#code/PTAEGUFcAdoewE4BdRIJ7QKYFoDOBDAM01FyQQEsA7Ac1ABM4Uqn8kK4qAoYAKlEy4ANtSTZ6FAgCMhJFtki4cUzIUQ56q6iV7Au6LKAAqcKQCtQAXlABvUAG0A1pjQAuUAAUEcLMjQBpFwBdd3wqNFAAX1AQUAAlTABjRHoAHi8fTD9AtAAaMLQAPn0MEigpaDYAC1SjXNAcwqsuUAaXAQAPJEwqelxQAFEuhHxEpFTnNDhCY3qySlomgH4W43scoM7u3v6AQQQRtFTqYgRPZdAAAwASGxzIgDpb8v3Dj2r0wsjL0FdVgApVq0jOtglsen14kkUql5tQaPUCssgVdbvcnjZ3kgqkZMABbaC1UFoIJfS4ov6tVpUTAANyyAEpVu4afSEFwSoYsTj8YS6m0ItZJtNjE1LKscuCdoNhqNxsKZvy4YtQEsBaAAD4QSAVD78xq-UCsrIc2K4GDwZCgfAHfARRjMJgUdicTllHWvO3cz7NTxSyEZXzoSVagBikCoYw4VE1oAAQnA4LIwq01TcbFRIHiVAhvoaWunM9msnmtYWsznHrdubiCZ9vhyDCRvfr2pguhD+grjFZQN2jGLVrEAMJwAlsCgyEieiKmMxJJCrIz+va2o4nLLnVV+9vbSE2aJq-4vNfejxNLVFnMMw1XzeUmJgADyVCEEWS4-YU9AhAoCDI4iYNA2LWkg5CTpA3T9E29CkGguDZkmoCIEaFYmq0kq7p2cGIUIsZ3mcaqSu4Na8rUxRup41QAGr4EIkCYLU9QeCuVHYuRYqgICrQsVh0rphuZzorcglQmQeYrDxNF0QxRKSgAZH2LgikYQT1AkZCgIpLbElpSlTIqpLFK0D4gixin9kEXBMhyhARlGnCkJgSAACJsPgTE7h20otoUhT-HO7j8pU2IkfUtIyZgJHSfRjH8ueN42KsFAzP8TYiiFVSgAAhJY1gAOTKjQ+WJSisQAAJILg2AUDQLAIJgKJzvYmWbNYEWxSiDVIJACDcK0kSrMkVCaTaZzWJlDy4NAIhIP8+UPCVQ2cJpsgxtYY0PGtNDYqsm0NfQkCJJg3FUv80ANbSQVzvUkyhOE9SJL1DVUEgACSvTtiyaEIDelhNElVJUilXFPQcPTvZ9HSgKkoBraA2CgAAjFpinnZdThgnl1gRpov40rBGpahddKYySVh5ahQhCAyTJA0DJO0mTbWgJIobUM6J0ANRjfYYMvZDmjQ1zyNBDear2Js7gHhy9Os6l-MQx9QsU9Y8OI0jdNy6AjPM72HUMbL9Pdb1Ma65MVlA5E9Rzkyg1cKIWSEKMJBvcOQhMFUgi2MtHsIO4+UHflsb5TIDHB1qodCKMjj5asuAUAAXlFoD5eAEepwAshn+UADI5wAGvnIcF0XcetHibBZBQdEBwnQixyHyRgZwOciDSVA5x4AxGHHg1NsYw42kYpS9mnACq1E55nHhTyHHgABIDHPkfL3HjsIM7x2gG7No+60UgjL07hFasTa4NLoAAPpNkFQ8ICPhiRJLXCDcNmngAAmpn-gDJ-vbgDQLhB4agEDzSgkgJaG8t6uw8FkXAjlAYOC-j-P+IQcJSCTKsKg+A8Qp1Pq0fANAU4ET2g5Kg7hqJwAoPQcMkYXT9VZvQJY7hAG4VWAABhYaAAAcj9VY+Ukb5W4QQ0AiQPbYkENLFEZgY7OXcG7CRXtcAonIHARQ8CFHu09oIVYg1WiJBtBfHe98X5vxWigQx-5ez2FWHYQ+YR6ABykGgegwdrZcE2PgfoEZHAsAAO4xm8SYm0L934oF8Ag9a+8jS4JTvlaAVQKDUzQB0fKuQ9rEPcAAZg4Rkwh5D3D-D+gDFE78kyYC2nAGg80vbUzgP4xAQg3Faw8a0Dh7g8lDSUVImJrRZGJGcEgaRcsE7JwDmXfJ9Nkh+2cdHQZ6SURtKiFMqxuAMnRGCb4gJQT+hvTgf+V0kTOAPDWfYDhQQHjn3OZcm+o8CrgEnnHJQrl3LnXgZweoKDf6fy+UAzBQhwGCEgbTLgLy3JIHwO8w5VB6h5NABwpk4K3nHNhanIR9R8oQNQsWBAeBwK0CWsiyF0KomYrWekhwYswXOQhVC1F5KjEPA4ZS+xR8nGpxcfQbAaBIBhEpefdw9g7B3KwAHNeURNiRCRbSlFHy0WXDWRiDhjwHG9EuJirlRLZUkoZanJVHCrmlFwMy1l19b6p0eXPaVNLXkkrWZill9Q2WOOca47AkLCX1EFQ4EVFr8qLwlZEKVMq7VQodcjZ1oA1UctDu6joNcBXGqFX60oAcZ7WpDRycpsgqk1NRTZOy9DoygA0QXciAVzDRWQDXIQ5FSqtFiJ5Xi3kAx6j8pWswQV6iZTCqAA2KduS0Vis2woWsi3kKckgcAkLujpFYr5fyDxl02hoMYlq1Q+0DuitiYdsl4qFDFn0sRFiHCZXCpFFmq6VFA2JVCuc1p+jBWqBe2KrTVgmz6sel5M6q56Nftm090McZKHLfs+V-kC0cg6FNZyv7ujzXETok1AyhlTSTpgdJ+Vs4MiAA
 * */

export type Tobj = Record<PropertyKey, any>

type Subpath<T, Key> = Key extends Extract<keyof T, string>
  ? T[Key] extends Array<infer P>
    ? `${Key}.${SubArrayPath<P>}`
    : T[Key] extends Record<string, any>
      ? `${Key}.${PathTemp<T[Key]>}`
      : never
  : never

type PathTemp<T, Key = keyof T> = Key extends Extract<keyof T, string>
  ? Key | Subpath<T, Key>
  : never

// support array dot notition
type SubArrayPath<P> = P extends PropertyKey | Function | Boolean
  ? `${number}`
  : `${number}` | `${number}.${PathTemp<P>}`

export type Path<T, Key extends keyof T = keyof T> =
  // Compatible Array object
  T extends Array<infer P>
    ? P extends {}
      ? SubArrayPath<P> | number
      : number
    : // Only compatible first-depth attributes typed sysmbol or number
    Key extends symbol | number
      ? Key
      : PathTemp<T>

export type PathValue<
  T,
  P extends Path<T>,
> = P extends `${infer Key}.${infer Rest}`
  ? PathValue<T[Key & keyof T], Rest & Path<T[Key & keyof T]>>
  : T[P & keyof T]

export function setData<T, P extends Path<T>>(
  obj: T,
  path: P,
  value: PathValue<T, P>,
) {
  if (typeof path !== 'string') {
    // @ts-expect-error  no need for tslint
    obj[path] = value
    return
  }
  const arr = path.split('.')
  const len = arr.length
  arr.reduce((prev: Tobj, key: any, currentIndex: number) => {
    if (
      currentIndex < len - 1
      && (prev[key] === undefined || prev[key] === null)
    )
      prev[key] = isFinite(+arr[currentIndex + 1]) ? [] : {}

    if (currentIndex === len - 1)
      prev[key] = value

    return prev[key]
  }, obj)
}
