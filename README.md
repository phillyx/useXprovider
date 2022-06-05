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

- [TS Playground](https://www.typescriptlang.org/play#code/PTAEGUFcAdoewE4BdRIJ7QKYFoDOBDAM01FyQQEsA7Ac1ABM4Uqn8kK4qAoYAKlEy4ANtSTZ6FAgCMhJFtki4cUzIUQ56q6iV7Au6LKAAqcKQCtQAXlABvUAG0A1pjQAuUAAUEcLMjQBpFwBdd3wqNFAAX1AQUAAlTABjRHoAHi8fTD9AtAAaMLQAPn0MEigpaDYAC1SjXNAcwqsuUAaXAQAPJEwqelxQAFEuhHxEpFTnNDhCY3qySlomgH4W43scoM7u3v6AQQQRtFTqYgRPZdAAAwASGxzIgDpb8v3Dj2r0wsjL0FdVgApVq0jOtglsen14kkUql5tQaPUCssgVdbvcnjZ3kgqkZMABbaC1UFoIJfS4ov6tVpUTAANyyAEpVu4afSEFwSoYsTj8YS6m0ItZJtNjE1LKscuCdoNhqNxsKZvy4YtQEsBaAAD4QSAVD78xq-UCsrIc2K4GDwZCgfAHfARRjMJgUdicTllHWvO3cz7NTxSyEZXzoSVagBikCoYw4VE1oAAQnA4LIwq01TcbFRIHiVAhvoaWunM9msnmtYWsznHrdubiCZ9vhyDCRvfr2pguhD+grjFZQN2jGLVrEAMJwAlsCgyEieiKmMxJJCrIz+va2o4nLLnVV+9vbSE2aJq-4vNfejxNLVFnMMw1XzeUmJgADyVCEEWS4-YU9AhAoCDI4iYNA2LWkg5CTpA3T9E29CkGguDZkmoCIEaFYmq0kq7p2cGIUIsZ3mcaqSu4Na8rUxRup41QAGr4EIkCYLU9QeCuVHYuRYqgICrQsVh0rphuZzorcglQmQeYrDxNF0QxRKSgAZH2LgikYQT1AkZCgIpLbElpSlTIqpLFK0D4gixin9kEXBMhyhARlGnCkJgSAACJsPgTE7h20otoUhT-HO7j8pU2IkfUtIyZgJHSfRjH8ueN42KsFAzP8TYiiFVSgAAhJY1gAOTKjQ+WJSisQAAJILg2AUDQLAIJgKJzvYmWbNYEWxSiDVIJACDcK0kSrMkVCaTaZzWJlDy4NAIhIP8+UPCVQ2cJpsgxtYY0PGtNDYqsm0NfQkCJJg3FUv80ANbSQVzvUkyhOE9SJL1DVUEgACSvTtiyaEIDelhNElVJUilXFPQcPTvZ9HSgKkoBraA2CgAAjFpinnZdThgnl1gRpov40rBGpahddKYySVh5ahQhCAyTJA0DJO0mTbWgJIobUM6J0ANRjfYYMvZDmjQ1zyNBDear2Js7gHhy9Os6l-MQx9QsU9Y8OI0jdNy6AjPM72HUMbL9Pdb1Ma65MVlA5E9Rzkyg1cKIWSEKMJBvcOQhMFUgi2MtHsIO4+UHflsb5TIDHB1qodCKMjj5asuAUAAXlFoD5eAEepwAshn+UADI5wAGvnIcF0XcetHibBZBQdEBwnQixyHyRgZwOciDSVA5x4AxGHHg1NsYw42kYpS9mnACq1E55nHhTyHHgABIDHPkfL3HjsIM7x2gG7No+60UgjL07hFasTa4NLoAAPpNkFQ8ICPhiRJLXCDcNmngAAmpn-gDJ-vbgDQLhB4agEDzSgkgJaG8t6uw8FkXAjlAYOC-j-P+IQcJSCTKsKg+A8Qp1Pq0fANAU4ET2g5Kg7hqJwAoPQcMkYXT9VZvQJY7hAG4VWAABhYaAAAcj9VY+Ukb5W4QQ0AiQPbYkENLFEZgY7OXcG7CRXtcAonIHARQ8CFHu09oIVYg1WiJBtBfHe98X5vxWigQx-5ez2FWHYQ+YR6ABykGgegwdrZcE2PgfoEZHAsAAO4xm8SYm0L934oF8Ag9a+8jS4JTvlaAVQKDUzQB0fKuQ9rEPcAAZg4Rkwh5D3D-D+gDFE78kyYC2nAGg80vbUzgP4xAQg3Faw8a0Dh7g8lDSUVImJrRZGJGcEgaRcsE7JwDmXfJ9Nkh+2cdHQZ6SURtKiFMqxuAMnRGCb4gJQT+hvTgf+V0kTOAPDWfYDhQQHjn3OZcm+o8CrgEnnHJQrl3LnXgZweoKDf6fy+UAzBQhwGCEgbTLgLy3JIHwO8w5VB6h5NABwpk4K3nHNhanIR9R8oQNQsWBAeBwK0CWsiyF0KomYrWekhwYswXOQhVC1F5KjEPA4ZS+xR8nGpxcfQbAaBIBhEpefdw9g7B3KwAHNeURNiRCRbSlFHy0WXDWRiDhjwHG9EuJirlRLZUkoZanJVHCrmlFwMy1l19b6p0eXPaVNLXkkrWZill9Q2WOOca47AkLCX1EFQ4EVFr8qLwlZEKVMq7VQodcjZ1oA1UctDu6joNcBXGqFX60oAcZ7WpDRycpsgqk1NRTZOy9DoygA0QXciAVzDRWQDXIQ5FSqtFiJ5Xi3kAx6j8pWswQV6iZTCqAA2KduS0Vis2woWsi3kKckgcAkLujpFYr5fyDxl02hoMYlq1Q+0DuitiYdsl4qFDFn0sRFiHCZXCpFFmq6VFA2JVCuc1p+jBWqBe2KrTVgmz6sel5M6q56Nftm090McZKHLfs+V-kC0cg6FNZyv7ujzXETok1AyhlTSTpgdJ+Vs4MiAA)

![图片](https://static01.imgkr.com/temp/b64aa8df0a64451784ed82ea48b6be66.png)
![图片](https://static01.imgkr.com/temp/39c74b60602a4151adfa36695166ada8.png)
![图片](https://static01.imgkr.com/temp/5c2cd70f791a45fa94519d215d15853e.png)

## Reference

- [i-need-to-learn-about-typescript-template-literal-types](https://dev.to/phenomnominal/i-need-to-learn-about-typescript-template-literal-types-51po)

- [how to skillfully use Provider&Inject](https://juejin.cn/post/6887770717430120456)