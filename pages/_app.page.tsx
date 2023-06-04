import {AppProps} from 'next/app'
import Head from 'next/head'
import {Box, MantineProvider, useMantineTheme} from '@mantine/core'
import {Source_Sans_3} from 'next/font/google'
import {Footer, NavBar} from '@/pages/NavBar'
import {PropsWithChildren} from 'react'

const sourceSans3 = Source_Sans_3({subsets: ['latin']})

export default function App(props: AppProps) {
  const {Component, pageProps} = props

  return (
    <>
      <Head>
        <title>Medium AI</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'light',
          fontFamily: sourceSans3.style.fontFamily,
          colors: {
            'brandPrimary': [
              '#e6edff',
              '#e6edff',
              '#e6edff',
              '#bbc9f9',
              '#90a6ef',
              '#6482e7',
              '#3a5edf',
              '#2145c6',
              '#18369b',
              '#0f266f',
            ],
            'brandSecondary': [
              '#e1f8ff',
              '#e1f8ff',
              '#e1f8ff',
              '#bee5f1',
              '#99d2e5',
              '#74c0da',
              '#4fadce',
              '#3894b5',
              '#28738d',
              '#1a5266',
            ],
          },
          primaryColor: 'brandPrimary',
          headings: {
            fontWeight: 600,
            sizes: {
              h1: {
                fontWeight: 500,
                fontSize: '3rem',
              },
              h2: {
                fontWeight: 400,
                fontSize: '1.8rem',
              }
            }
          }
        }}
      >
        <GlobalStyles>
          <NavBar/>
          <Component {...pageProps} />
          <Footer/>
        </GlobalStyles>
      </MantineProvider>
    </>
  )
}

function GlobalStyles(props: PropsWithChildren<{}>) {
  const theme = useMantineTheme()
  return <Box sx={{
    color: theme.colors.gray[8],
    fontWeight: 500,
  }}>
    {props.children}
  </Box>
}