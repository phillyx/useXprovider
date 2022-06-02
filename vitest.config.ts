import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    dedupe: [
      'vue',
      'vue-demi',
      '@vue/runtime-core',
    ],
  },
  define: {
    __VUE_OPTIONS_API__: 'true',
    __VUE_PROD_DEVTOOLS__: 'false',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    reporters: 'dot',
    deps: {
      inline: [
        'vue2',
        '@vue/composition-api',
        'vue-demi',
      ],
    },
  },
})
