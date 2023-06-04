import Head from 'next/head'
import {Center, Title, useMantineTheme} from '@mantine/core'

export default function Home() {
  const theme = useMantineTheme()
  return (
    <>
      <Head>
        <title>Medium AI | Provider</title>
      </Head>
      <Center sx={{
        height: '100vh',
      }}>
        <Title order={1} sx={{
          color: theme.colors.gray[7],
        }}>
          Coming Soon
        </Title>
      </Center>
    </>
  )
}
