import Link from 'next/link'
import {Button, Sx} from '@mantine/core'

export function BookDemoButton(props: { sx?: Sx, size?: 'md' | 'sm' }) {
  return <Button
    component={Link}
    href={'https://google.ca/'}
    target={'_blank'}
    size={'lg'}
    px={props.size === 'sm' ? '1rem' : '1.5rem'}
    sx={props.sx}
    styles={{
      root: {
        height: props.size === 'sm' ? '2.75rem' : '3.5rem',
        fontSize: props.size === 'sm' ? '1.125rem' : '1.25rem',
      },
    }}>
    Book a Demo
  </Button>
}