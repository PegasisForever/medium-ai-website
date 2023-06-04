import {Anchor, Group, Text, useMantineTheme} from '@mantine/core'
import Link from 'next/link'
import {PropsWithChildren} from 'react'
import {usePathname} from 'next/navigation'
import {BookDemoButton} from '@/pages/BookDemoButton'

export function NavBar() {
  const theme = useMantineTheme()
  return (
    <Group
      px={'2rem'}
      py={'0.75rem'}
      spacing={'2rem'}
      sx={{
        borderBottom: `1px solid ${theme.colors.gray[4]}`,
        position: 'fixed',
        width: '100%',
        backgroundColor: theme.fn.rgba(theme.white, 0.75),
        backdropFilter: 'blur(24px)',
        zIndex: 1,
      }}>
      <Text sx={{
        fontSize: '2rem',
        fontWeight: 600,
      }} style={{
        flexGrow: 1,
      }}>
        Medium AI
      </Text>
      <NavLink href={'/'}>
        Home
      </NavLink>
      <NavLink href={'/provider'}>
        For Providers
      </NavLink>
      <BookDemoButton size={'sm'}/>
    </Group>
  )
}

function NavLink(props: PropsWithChildren<{ href: string }>) {
  const theme = useMantineTheme()
  const pathname = usePathname()
  const isActive = pathname === props.href

  return <Anchor
    component={Link}
    href={props.href}
  >
    <Text component={'span'} size={'lg'} weight={600} sx={{
      color: isActive ? theme.colors.brandPrimary[6] : theme.colors.gray[8],
    }}>
      {props.children}
    </Text>
  </Anchor>
}

export function Footer() {
  const theme = useMantineTheme()
  return <Group
    px={'2rem'}
    py={'2rem'}
    spacing={'2rem'}
    sx={{
      width: '100%',
      backgroundColor: theme.black,
      color: theme.white,
    }}>
    <Text sx={{
      fontSize: '1.5rem',
      fontWeight: 600,
    }} style={{
      flexGrow: 1,
    }}>
      Medium AI
    </Text>
    <Text sx={{
      color: theme.colors.gray[4],
    }}>
      © 2023
    </Text>
  </Group>
}