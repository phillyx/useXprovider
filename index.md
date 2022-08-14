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

- [TS Playground](https://www.typescriptlang.org/play?#code/PQKhCgAIUyGUCuAHJB7ATgF0pgnkgUwFoBnAQwDMDITN0BLAOwHNIATVbRzsze1RlBiQAAmQSYAFhkhJJ9ADYLcADyGwRBALZlFkAIwAGAEyGALAFZDATmP6RARwcA6AMaot6kMHChIBEgUmTCI2enIAIwVqbiIEEmIIggoMYjZkpmpvcDxCSAAVVAiAK0gAXkgAb0gAbQBrAlwALkgABXRUQixcAGlGgF0WskZcSABfSGBgSAAlAnd0NgAeds6Cbr7cABph3AA+HPxqRAikXkkl-K3ITb3yqBvG-xVMAkY2EkgAURf0MldMEsGrhUBQCtdaAwWHcAPwPfI1Tb9Z6vd6fACC6D+uCWTCo6DasMgAAMACSVTZjZzkk6Y7Gtc4rPZjYmQJoPAAUD1gCKRKLeH1m8wwy0hTGY112sO5JPJlOplQZUny2iQl0RA2ZxJl7NgsEYBAAbusAJQPFoG43ocCHPJKyQqrRqq6PUYVYGggp3MoPTb8tHfX7-QEesEusXQyAw12QAA+8AQp0ZLtubMglvWNqmNGQaCwkDIWLIow4XE49D4Altx0TdOL9qZ9za-sFqy6eD98YAYghGAD+Iw45AAEKoVDRYawaNkyqMBBaJLoFlpqAzucL9bL+Nr+eLqnk+2OtWtLU23LUBspp4EF4Cz6hgrlSAP-Leh7ZgDCHjOfCi1DroxFMU8yYPCLYYkWOJ4ushJRs2N6ooKlQTNGHK0pBDYnkO66LiaaY4TBuqTNMADyjDKJA7hOrw9B-pAFD0OgtChAQSBSAWmB0LREgBDgRxsDQuAkAu46QDIBHWrAfoIXegkiQo2G7jB0Z+i0h6qpcBzVm05wAGpkAoCAEJc1ytOBOlSJp3qQFysBmTJAYztBBLyuSzlCrQy5wnZekGUZ6p+gAZM+jSevk-TXHMtCQMFl4aqMwUvv0ewHLAREImZiWhWG-TgGaNoUL2-YCDQBCYAAIrwZAmfBt4BpeKUckBLQuj+khqdchp+QQam+YZxkuieeGVA89Bghy56em1kAAIRlBUADkEbMAtw0ytmIiYCQRD0Mw3DoAQMpATUbXIhUXX9TKB2YAg6CCLAYwPO4jDRYWBIVG1zgkEgQSYByC3OKtT0CNF0SDhUb3OGDzBSA8kMHWwCCuAQtl6hySAHYaLVAdcwJDCM1yuLdB2MJgACS7w3haSnoHhZR3CNep6mNNlE1ibzk5TKiQEskBg5ARAGDFwXo5j9QDOU82QL26QMQaAmxvGGNGuLuBnVLc5KCaZpM0zyuGqrZ2QOEXZMBWKMANRvTUbMk5z6TcxbBj9Hh0Y1MiLTITauvG+NtscxTDuSxU-OC-oOs+7IYvAkbF1Gd7uvXbdg764bMpjNcQFmo94DBOsFD-NQZMfgonCSLxjOUeOGAtAtCMLUOC1REZDfxk3Cj-HUC0PCQ9AAF49ZAC1wK3Q8ALKjwtAAyk8ABoz43s-z93sA6K8DAGbXvcKF3jfuJxAiT0EBqMJPrRfPk3ePeeBQfoW+RHE+w8AKq6ZPY+tG-jetAAEl8X9t3-t3PO6AC7I0gMXQsVQHgRD+O8Foy0HjnhIJ7SAAB9c8LU77oAfnkMY7twCPWetFOAABNMePQvikKfHAXA8lnApHQP9V4tAgYgLAUXVo6wSAlUrjUMhFCqGDDkhEccDxGBkC0IPRBsAyDMEHhJOGxVGAtF0qgegbAex9krPdY2bAYQtFofJB4hgDGQAAHI0weAtfQC0zEyMoqXKQARPYymKJ3MqLRi5OPLiQGUdBUDxG4V4kuZcAgPEerAVwhYUEQOwQQohINsDRKYk+GoDxqiwOGGwWuERcBsAbhncAyIyCfF7HUbgAB3QcpS4mFgIcQ7AXQeHg2gfqSRg8FpyEUMoFQC0thw3kS0AAzIYAZsjlEtA5HTBmMpiHjgIFDVAzB-rlyUKgSpGAFAFIjkU2AhgWhjKej4lxbS9TuNcA0TArifa9wHrXZe4zdbuFLugXJHdLn9PTk8vZlEYkDImLU8pVSamfDJlwpiVZmkCDcDEmohh+jOGQfCxFGDH6LTgK-buCQKpVXRtwgQ1wBGUNIUSuhoiFDMICJgVaZocWVUwGQfFkLGDXDGZAQwdKyoMqZdC1lQ9bHXAWiwrgNNSBcRYEDeleK+VCpSSQfptQXbgGlYy5lLS5UxOcIYRVmS4E5KHnktgRBcAIGGIq5BLQajVDRYQWuQDxjIjGFy3FarZUknlQqQwVIsnvGJEKo1UruUyoJfyhanrDBIqOCQbVur0GYKHpir+zqVXBrVfKoVOrrh6uybk-JRBGWSuuJa2oNqE0LV-g6sYTqXU8o5Bmgw2bIC+oNU3fNKh6BkAtdGq1Zaji1w-smmtNp5nRCWSsvl+VCraIHNLBIs9NJNRKL1LAnaFCaTWrAbMNV7J1VbMmRqzVwSyHOB1SAcdB72n0v1HdewI7TuUaVTAcBGWvBWOZBqewOTOB-YWZgsSTqnraJ1bqvUpDXv8oNPYLszlRKSbUNqIH+pGz-X4pmqqmVAQLJ8Vq5wkNGV2Q8JOd1YNPpfbwQ6D1CEjvg9zCoQSF3gtDV+ydNoVBfTKuR14-1XAnJjRcq5X1+4EH6QtCeJogA)

![图片](https://phillyx.github.io/useXprovider/assets/1.png)
![图片](https://phillyx.github.io/useXprovider/assets/1.png)
![图片](https://phillyx.github.io/useXprovider/assets/1.png)

## Reference

- [i-need-to-learn-about-typescript-template-literal-types](https://dev.to/phenomnominal/i-need-to-learn-about-typescript-template-literal-types-51po)

- [how to skillfully use Provider&Inject](https://juejin.cn/post/6887770717430120456)
