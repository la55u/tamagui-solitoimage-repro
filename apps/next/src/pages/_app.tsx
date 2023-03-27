import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/zen-dots'
import '@tamagui/core/reset.css'
import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme'
import { Provider } from 'app/src/provider'
import type { AppProps } from 'next/app'
import 'raf/polyfill'

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useRootTheme()

  return (
    <>
      <NextThemeProvider onChangeTheme={setTheme}>
        <Provider disableRootThemeClass defaultTheme={theme}>
          <Component {...pageProps} />
        </Provider>
      </NextThemeProvider>
    </>
  )
}

export default MyApp
