# Bug

The issue happens when I try to use `SolitoImage` in a component inside the ui package.
The file is in `packages/ui/BgImage.tsx`. Note that if I return a normal tamagui element it works without any proplem.

## Steps to reproduce:

1. run `yarn`
2. run `yarn web`
3. you should see the script exited with the following error:

```
Tamagui Webpack Loader Error:
   createCSSVariable expected string: undefined
Error: createCSSVariable expected string: undefined
    at createCSSVariable (/home/la/Projects/tamagui-bug/node_modules/@tamagui/core-node/dist/index.js:5838:17)
    at variableToCSS (/home/la/Projects/tamagui-bug/node_modules/@tamagui/core-node/dist/index.js:10563:63)
    at /home/la/Projects/tamagui-bug/node_modules/@tamagui/core-node/dist/index.js:11016:78
    at createTamagui (/home/la/Projects/tamagui-bug/node_modules/@tamagui/core-node/dist/index.js:11086:9)
    at loadTamagui (/home/la/Projects/tamagui-bug/node_modules/@tamagui/static/dist/cjs/extractor/loadTamagui.js:155:40)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async Object.load [as loadTamagui] (/home/la/Projects/tamagui-bug/node_modules/@tamagui/static/dist/cjs/extractor/createExtractor.js:92:42)
    at async extractToClassNames (/home/la/Projects/tamagui-bug/node_modules/@tamagui/static/dist/cjs/extractor/extractToClassNames.js:78:3)
    at async Object.loader2 (/home/la/Projects/tamagui-bug/node_modules/tamagui-loader/dist/cjs/loader.js:62:23)

Missing theme, an error occurred when importing your config
Got config: [Function (anonymous)] {
  displayName: 'ProxyWorm - Check excludeReactNativeWebExports',
  _isProxyWorm: true
}
Looking for theme: displayName


```
