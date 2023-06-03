import {Anchor, Button, Group, Text, useMantineTheme} from '@mantine/core'
import Link from 'next/link'
import {PropsWithChildren} from 'react'
import {usePathname} from 'next/navigation'

export function NavBar() {
  const theme = useMantineTheme()
  return (
    <Group
      px={'2rem'}
      py={'0.75rem'}
      spacing={'2rem'}
      sx={{
        borderBottom: `1px solid ${theme.colors.gray[4]}`,
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
      <Button component={Link} href={'https://google.ca/'} target={'_blank'} size={'lg'} px={'1rem'} styles={{
        root: {
          height: '2.75rem',
        },
      }}>
        Book a Demo
      </Button>
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