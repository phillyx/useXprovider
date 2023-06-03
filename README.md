# useXprovider

- ⚡️ An easy way to manage state
- 🚚 An intelligent data pass-through method
- 🔥 Implementing the response data updates by using `provider` and `inject`
- ✅ Supports Vue 2 & 3 using vue-demi
- 🚀 A similar `React.Context` way of Coding
- 💪 Implement intelligent, deeper, powerful type inference with the help of `Template Literal Types` and `Infer Keyword`

## install
  ```
  npm i use-x-provider
  ```
## Demo

- [demo online](https://codesandbox.io/s/dreamy-sinoussi-zinjvv)
- [repository](https://github.com/phillyx/vue-use-useXprovider)

## Usage

```tsx
// demo.context.tsx
import { useXprovider } from 'use-x-provider'
import { defineComponent } from 'vue-demi'
import DemoApp from './Demo.vue'

interface IDemoState {
  status: boolean
  foo: {
    bar: {
      a: string
    }
  }
}
const demoState = {
  status: false,
} as IDemoState

const DemoContext = useXprovider<IDemoState>(demoState)

export const setDemoState = DemoContext.setState
export const setDemoStateWithStr = DemoContext.setStateWithStr
export const useDemoContext = DemoContext.useContext

export default defineComponent({
  setup() {
    return () => (
      <DemoContext.ProviderComponent>
        <DemoApp></DemoApp>
      </DemoContext.ProviderComponent>
    )
  },
})
```

``` html
// demo.vue
<template>
  <p>status: {{ demoContext.status }}</p>
  <p>foo.bar.a {{ demoContext.foo.bar.a }}</p>
  <button @click="onclick">setSate</button>
  <button @click="onClick1">setStateWithStr</button>
</template>
<script lang="ts" setup>
import { useDemoContext, setDemoState, setDemoStateWithStr } from './demo.context'
import { useXhook } from './hooks/useXhook'

const demoContext = useDemoContext()
// must initialized in setup
const { d } = useXhook(demoContext)

const onclick = () => {
  setDemoState({ status: true })
}
const onClick1 = () => {
  setDemoState('foo.bar.a', 'hello world')

  setTimeout(() => {
    // equal to
    setDemoStateWithStr('foo.bar.a','hello vue')
  }, 3e3);
}
</script>

```

```ts
 // hooks, how to use context out of the component
 function useXhook(context: IDemoState) {
   const d = computed(() => context.foo.bar.a.toUpperCase())

   return {
     d
   }
 }
```
## 🐄🍺 Type reference

- [TS Playground](https://www.typescriptlang.org/play?#code/PTAEGUFcAdoewE4BdRIJ7QKYFoDOBDAM01FyQQEsA7Ac1ABM4Uqn8kK4qAoYAKlEy4ANtSTZ6FAgCMhJFtki4cUzIUQ56q6iV7Au6LKAAqcKQCtQAXlABvUAG0A1pjQAuUAAUEcLMjQBpFwBdd3wqNFAAX1AQUAAlTABjRHoAHi8fTD9AtAAaMLQAPn0MEigpaDYAC1SjXNAcwqsuUAaXAQAPJEwqelxQAFEuhHxEpFTnNDhCY3qySlomgH4W43scoM7u3v6AQQQRtFTqYgRPZdAAAwASGxzIgDpb8v3Dj2r0wsjL0FdVgApVq0jOtglsen14kkUql5tQaPUCssgVdbvcnjZ3kgqkZMABbaC1UFoIJfS4ov6tVpUTAANyyAEpVu4afSEFwSoYsTj8YS6m0ItZJtNjE1LKscuCdoNhqNxsKZvy4YtQEsBaAAD4QSAVD78xq-UCsrIc2K4GDwZCgfAHfARRjMJgUdicTllHWvO3cz7NTxSyEZXzoSVagBikCoYw4VE1oAAQnA4LIwq01TcbFRIHiVAhvoaWunM9msnmtYWsznHrdubiCZ9vhyDCRvfr2pguhD+grjFZQN2jGLVrEAMJwAlsCgyEieiKmMxJJCrIz+va2o4nLLnVV+9vbSE2aJq-4vNfejxNLVFnMMw1XzeUmJgADyVCEEWS4-YU9AhAoCDI4iYNA2LWkg5CTpA3T9E29CkGguDZkmoCIEaFYmq0kq7p2cGIUIsZ3mcaqSu4Na8rUxRup41QAGr4EIkCYLU9QeCuVHYuRYqgICrQsVh0rphuZzorcglQmQeYrDxNF0QxRKSgAZH2LgikYQT1AkZCgIpLbElpSlTIqpLFK0D4gixin9kEXBMhyhARlGnCkJgSAACJsPgTE7h20otoUhT-HO7j8pU2IkfUtIyZgJHSfRjH8ueN42KsFAzP8TYiiFVSgAAhJY1gAOTKjQ+WJSisQAAJILg2AUDQLAIJgKJzvYmWbNYEWxSiDVIJACDcK0kSrMkVCaTaZzWJlDy4NAIhIP8+UPCVQ2cJpsgxtYY0PGtNDYqsm0NfQkCJJg3FUv80ANbSQVzvUkyhOE9SJL1DVUEgACSvTtiyaEIDelhNElVJUilXFPQcPTvZ9HSgKkoBraA2CgAAjFpinnZdThgnl1gRpov40rBGpahddKYySVh5ahQhCAyTJA0DJO0mTbWgJIobUM6J0ANRjfYYMvZDmjQ1zyNBDear2Js7gHhy9Os6l-MQx9QsU9Y8OI0jdNy6AjPM72HUMbL9Pdb1Ma65MVlA5E9Rzta-QmOYTKDVwohZIQowkG9w5CEwVSCLYy0+wg7j5Qd+WxvlMgMeHWqR0IoyOPlqy4BQABeUWgPl4Ax5nACyOf5QAMgXAAaxcRyXZdJ60eJsFkFB0SHKdCInEfJGBnAFyINJUAXHgDEYSeDU2xjDjaRilL2WcAKrUQXuceHPEceAAEgMS+x+vSeuwg7vHaAXs2gHrRSCMvTuEVqxNrg0ugAA+k2QVjwgE+GJEktcINw2aeAACauf+AGL-Xs4A0C4QeGoBA80oJICWjvPensPBZFwI5QGDg-4AKASEHCUgkyrCoPgPEGdL6tHwDQDOBE9oOSoO4aicAKD0HDJGF0-VWb0CWO4UBuFVgAAYOGgAAHI-VWPlJG+V+EkNAIkH22JBDSxRGYBOzl3BexkX7XAKJyBwEUMglR3tfaCFWINVoiQbQ3wPs-D+X8VooFMf+Xs9hVh2FPmEegIcpBoHoOHa2XBNj4H6BGRwLAADuMZ-EWJtB-b+KBfAoPWsfI0hCM75WgFUCg1M0AdHyrkPa5D3AAGYeE5NIdQ9w-w-oAxRN-JMmAtpwBoPNP21M4DBMQEILxWsfGtB4e4IpQ01FyISa0RRiRnBIHkXLFO6cQ5V2KfTZIQd3Hx1GdklEXSohzLsbgHJ0RwmBJCWE-ob0kH-ldLEzgDwtn2B4UEB419rm3IfpPAq4BZ5JyUK5dy51kGcHqBgwBv8-lgNwUIaBghYG0y4B8tySB8DfNOVQeoRTQA8KZNCr55zEWZzEfUfKMDULFgQHgcCtAlrothfCuJuKtnZIcGLKFzkYVwsxdSsxDweG0ucWfNxmcPH0GwGgSAYRaXX3cPYOwTysAhy3lETYkQ0WMoxT8rFlwtkYh4Y8FxvRLi4r5WSxVFKWWZzVTwu5pRcDss5ffR+mdXlL3lQyz5FKtm4o5fULlrj3GeOwLC0l9RRUOAlTa-Kq8ZWRDlQqp1cKXXI3daALVPLI7eo6A3EV5qxVBtKCHBe9qI0cmqbIOpDTMU2Tssw6MoAdEl3IgFcw0VkANyEORUqrRYieV4t5AMeo-K1rMEFeomUwqgANhnbktFYrtsKFrMt1CnJIHALC7o6RWK+X8g8ddNoaDmJatUIdI7orYnHbJeKhQxZDKkTYhwmVwqRRZpujRQNyVwttuE4K1Qb2xU6asE2fVz0fIXXXIxn982XuhjjJQ1bjnKv8iWjkHQprOQA90ea0iDEWpGWMqaadMDZPyvnBkQA)

![图片](https://phillyx.github.io/useXprovider/assets/1.png)
![图片](https://phillyx.github.io/useXprovider/assets/2.png)
![图片](https://phillyx.github.io/useXprovider/assets/3.png)

## Reference

- [i-need-to-learn-about-typescript-template-literal-types](https://dev.to/phenomnominal/i-need-to-learn-about-typescript-template-literal-types-51po)

- [how to skillfully use Provider&Inject](https://juejin.cn/post/6887770717430120456)