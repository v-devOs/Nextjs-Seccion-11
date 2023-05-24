import { useEffect, useState } from 'react'
import type { AppContext, AppProps } from 'next/app'
import { customTheme, darkTheme, lightTheme } from '</themes>'
import { Theme, ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import Cookies from 'js-cookie'

interface Props extends AppProps{
  theme: string
}

export default function App({ Component, pageProps, theme = 'dark' }: Props) {


  const [currentTheme, setCurrentTheme] = useState(lightTheme)

  useEffect(() => {

    const cookieTheme = Cookies.get('theme')
    const seletedTheme = cookieTheme  === 'light'
    ? lightTheme
    : cookieTheme === 'dark'
      ? darkTheme
      : customTheme

    setCurrentTheme(seletedTheme)

  }, [])
  
  


  return (
    <ThemeProvider theme={ currentTheme }>
      <CssBaseline/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

