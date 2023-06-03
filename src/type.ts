/**
 * Support type-safe string dot notation
 * author phillyx
 * email 1020450921@qq.com
 * ts playground
 * https://www.typescriptlang.org/play?#code/PTAEGUFcAdoewE4BdRIJ7QKYFoDOBDAM01FyQQEsA7Ac1ABM4Uqn8kK4qAoYAKlEy4ANtSTZ6FAgCMhJFtki4cUzIUQ56q6iV7Au6LKAAqcKQCtQAXlABvUAG0A1pjQAuUAAUEcLMjQBpFwBdd3wqNFAAX1AQUAAlTABjRHoAHi8fTD9AtAAaMLQAPn0MEigpaDYAC1SjXNAcwqsuUAaXAQAPJEwqelxQAFEuhHxEpFTnNDhCY3qySlomgH4W43scoM7u3v6AQQQRtFTqYgRPZdAAAwASGxzIgDpb8v3Dj2r0wsjL0FdVgApVq0jOtglsen14kkUql5tQaPUCssgVdbvcnjZ3kgqkZMABbaC1UFoIJfS4ov6tVpUTAANyyAEpVu4afSEFwSoYsTj8YS6m0ItZJtNjE1LKscuCdoNhqNxsKZvy4YtQEsBaAAD4QSAVD78xq-UCsrIc2K4GDwZCgfAHfARRjMJgUdicTllHWvO3cz7NTxSyEZXzoSVagBikCoYw4VE1oAAQnA4LIwq01TcbFRIHiVAhvoaWunM9msnmtYWsznHrdubiCZ9vhyDCRvfr2pguhD+grjFZQN2jGLVrEAMJwAlsCgyEieiKmMxJJCrIz+va2o4nLLnVV+9vbSE2aJq-4vNfejxNLVFnMMw1XzeUmJgADyVCEEWS4-YU9AhAoCDI4iYNA2LWkg5CTpA3T9E29CkGguDZkmoCIEaFYmq0kq7p2cGIUIsZ3mcaqSu4Na8rUxRup41QAGr4EIkCYLU9QeCuVHYuRYqgICrQsVh0rphuZzorcglQmQeYrDxNF0QxRKSgAZH2LgikYQT1AkZCgIpLbElpSlTIqpLFK0D4gixin9kEXBMhyhARlGnCkJgSAACJsPgTE7h20otoUhT-HO7j8pU2IkfUtIyZgJHSfRjH8ueN42KsFAzP8TYiiFVSgAAhJY1gAOTKjQ+WJSisQAAJILg2AUDQLAIJgKJzvYmWbNYEWxSiDVIJACDcK0kSrMkVCaTaZzWJlDy4NAIhIP8+UPCVQ2cJpsgxtYY0PGtNDYqsm0NfQkCJJg3FUv80ANbSQVzvUkyhOE9SJL1DVUEgACSvTtiyaEIDelhNElVJUilXFPQcPTvZ9HSgKkoBraA2CgAAjFpinnZdThgnl1gRpov40rBGpahddKYySVh5ahQhCAyTJA0DJO0mTbWgJIobUM6J0ANRjfYYMvZDmjQ1zyNBDear2Js7gHhy9Os6l-MQx9QsU9Y8OI0jdNy6AjPM72HUMbL9Pdb1Ma65MVlA5E9Rzta-QmOYTKDVwohZIQowkG9w5CEwVSCLYy0+wg7j5Qd+WxvlMgMeHWqR0IoyOPlqy4BQABeUWgPl4Ax5nACyOf5QAMgXAAaxcRyXZdJ60eJsFkFB0SHKdCInEfJGBnAFyINJUAXHgDEYSeDU2xjDjaRilL2WcAKrUQXuceHPEceAAEgMS+x+vSeuwg7vHaAXs2gHrRSCMvTuEVqxNrg0ugAA+k2QVjwgE+GJEktcINw2aeAACauf+AGL-Xs4A0C4QeGoBA80oJICWjvPensPBZFwI5QGDg-4AKASEHCUgkyrCoPgPEGdL6tHwDQDOBE9oOSoO4aicAKD0HDJGF0-VWb0CWO4UBuFVgAAYOGgAAHI-VWPlJG+V+EkNAIkH22JBDSxRGYBOzl3BexkX7XAKJyBwEUMglR3tfaCFWINVoiQbQ3wPs-D+X8VooFMf+Xs9hVh2FPmEegIcpBoHoOHa2XBNj4H6BGRwLAADuMZ-EWJtB-b+KBfAoPWsfI0hCM75WgFUCg1M0AdHyrkPa5D3AAGYeE5NIdQ9w-w-oAxRN-JMmAtpwBoPNP21M4DBMQEILxWsfGtB4e4IpQ01FyISa0RRiRnBIHkXLFO6cQ5V2KfTZIQd3Hx1GdklEXSohzLsbgHJ0RwmBJCWE-ob0kH-ldLEzgDwtn2B4UEB419rm3IfpPAq4BZ5JyUK5dy51kGcHqBgwBv8-lgNwUIaBghYG0y4B8tySB8DfNOVQeoRTQA8KZNCr55zEWZzEfUfKMDULFgQHgcCtAlrothfCuJuKtnZIcGLKFzkYVwsxdSsxDweG0ucWfNxmcPH0GwGgSAYRaXX3cPYOwTysAhy3lETYkQ0WMoxT8rFlwtkYh4Y8FxvRLi4r5WSxVFKWWZzVTwu5pRcDss5ffR+mdXlL3lQyz5FKtm4o5fULlrj3GeOwLC0l9RRUOAlTa-Kq8ZWRDlQqp1cKXXI3daALVPLI7eo6A3EV5qxVBtKCHBe9qI0cmqbIOpDTMU2Tssw6MoAdEl3IgFcw0VkANyEORUqrRYieV4t5AMeo-K1rMEFeomUwqgANhnbktFYrtsKFrMt1CnJIHALC7o6RWK+X8g8ddNoaDmJatUIdI7orYnHbJeKhQxZDKkTYhwmVwqRRZpujRQNyVwttuE4K1Qb2xU6asE2fVz0fIXXXIxn982XuhjjJQ1bjnKv8iWjkHQprOQA90ea0iDEWpGWMqaadMDZPyvnBkQA
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
  }, obj as Tobj)
}
