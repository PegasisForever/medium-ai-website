import Head from 'next/head'
import {AspectRatio, Box, Center, Group, SimpleGrid, Stack, Sx, Text, Title, useMantineTheme} from '@mantine/core'
import {BookDemoButton} from '@/pages/BookDemoButton'
import Image, {StaticImageData} from 'next/image'
import doctorTalkingImage from './doctor_talking.jpg'
import realTimeDocArt from './real_time_doc_art.png'
import accelerateArt from './accelerate_art.png'
import {FunctionComponent, PropsWithChildren, ReactNode} from 'react'
import {PropsWithClassName} from '@/pages/utils'
import {AIIcon} from '@/pages/icons/AIIcon'
import {SpeechRecognitionIcon} from '@/pages/icons/SpeechRecognitionIcon'
import {MultiModalIcon} from '@/pages/icons/MultiModalIcon'
import {LongitudinalContextIcon} from '@/pages/icons/LongitudinalContextIcon'
import {MultipleSpeakersIcon} from '@/pages/icons/MultipleSpeakersIcon'
import {MultiLingualIcon} from '@/pages/icons/MultiLingualIcon'

export default function Home() {
  const theme = useMantineTheme()
  return (
    <>
      <Head>
        <title>Medium AI</title>
      </Head>
      <Group p={'8rem'} noWrap sx={{
        minHeight: '100vh',
      }}>
        <Center style={{
          flexGrow: 1,
          flexBasis: 0,
        }}>
          <Box sx={{
            maxWidth: '40rem',
          }}>
            <Title order={1}>
              Bridging the Healthcare Shortage with AI
            </Title>
            <Text
              mt={'1.5rem'}
              sx={{
                fontSize: '1.5rem',
                color: theme.colors.gray[7],
              }}>
              Medium AI is a{' '}
              <Box component={'span'} sx={{
                color: theme.colors.brandPrimary[6],
                fontWeight: 600,
              }}>
                fully automated
              </Box>{' '}
              AI medical scribe that captures
              the provider-patient conversation in{' '}
              <Box component={'span'} sx={{
                color: theme.colors.brandPrimary[6],
                fontWeight: 600,
              }}>
                real-time
              </Box>{' '}
              into a comprehensive medical note.
            </Text>
            <BookDemoButton sx={{
              marginTop: '2rem',
            }}/>
          </Box>
        </Center>
        <Center style={{
          flexGrow: 1,
          flexBasis: 0,
        }}>
          <Box sx={{
            position: 'relative',
            height: '100%',
            width: '100%',
            maxWidth: 640,
          }}>
            <AspectRatio
              ratio={9 / 14}
              maw={640}
              sx={{
                width: '100%',
                position: 'relative',
              }}>
              <Image
                src={doctorTalkingImage}
                alt={'A doctor talking to a patient'}
                fill
                sizes={'640px'}
                placeholder={'blur'}
                loading={'eager'}
                style={{
                  objectFit: 'cover',
                }}
              />
            </AspectRatio>
            <Box sx={{
              position: 'absolute',
              right: '-2rem',
              top: '-2rem',
              width: '95%',
              height: '95%',
              backgroundColor: theme.colors.brandSecondary[0],
              zIndex: -1,
            }}/>
          </Box>

        </Center>
      </Group>
      <Center mt={'2rem'}>
        <Title order={1} sx={{
          maxWidth: '60rem',
          textAlign: 'center',
        }}>
          In Canada, patients at priority 2-4 typically wait 20 to 58 days for a single appointment,
          we can tackle this issue.
        </Title>
      </Center>
      <Center>
        <Group style={{
          marginTop: '4rem',
          maxWidth: '100rem',
        }}>
          <Stats stats={'78%'} label={'average reduction in documentation time'}/>
          <Stats stats={'7-17x'} label={'ROI across our customers, realized within weeks'}/>
          <Stats stats={'~1'} label={'shift on average before providers start using AutoScribe for every visit'}/>
        </Group>
      </Center>
      <Center sx={{
        marginTop: '4rem',
      }}>
        <BookDemoButton/>
      </Center>
      <Box mt={'8rem'} py={'5rem'} sx={{
        backgroundColor: theme.colors.brandPrimary[9],
        color: 'white',
      }}>
        <Title order={1} sx={{
          textAlign: 'center',
        }}>
          Partners
        </Title>
      </Box>
      <FeatureParagraph
        title={'Real-time documentation that integrates seamlessly into workflow'}
        subTitle={'Built for healthcare facilities'}
        image={{
          src: realTimeDocArt,
          mt: -14,
          mr: -24,
          mb: -38,
        }}
      >
        Embeds into EHR workflows and{' '}
        <Box component={'span'} sx={{
          color: theme.colors.brandPrimary[6],
          fontWeight: 600,
        }}>
          generates notes within seconds
        </Box>
      </FeatureParagraph>
      <FeatureParagraph
        title={'Accelerate your clinical initiatives'}
        subTitle={'Loved by clinical leadership'}
        image={{
          src: accelerateArt,
          mt: -14,
          mr: -24,
          mb: -38,
        }}
        sx={{
          backgroundColor: theme.colors.gray[1],
        }}
      >
      </FeatureParagraph>
      <Center mt={'10rem'}>
        <Title order={1} sx={{
          maxWidth: '60rem',
          textAlign: 'center',
        }}>
          How It Works
        </Title>
      </Center>
      <Center>
        <Box sx={{
          maxWidth: '40rem',
        }}>
          <HowItWorksStep step={1} title={'Click to start a visit'}>
            Sits right on top of the provider’s existing workflow
            and automatically ingests relevant data and context
            from the EMR to initialize the visit
          </HowItWorksStep>
          <HowItWorksStep step={2} title={'Providers speak to patients as they normally would'}>
            Listens ambiently in the background, allowing providers
            to focus fully on the patient during the visit without
            having to multitask
          </HowItWorksStep>
          <HowItWorksStep step={3} title={'AI-generated draft is ready for review and export within seconds'}>
            Automates structured field selections, button clicks,
            and free text entry into the EMR so that providers
            are freed from non-clinical busywork
          </HowItWorksStep>
        </Box>
      </Center>
      <Center mt={'3rem'}>
        <BookDemoButton/>
      </Center>
      <Center mt={'15rem'}>
        <Title order={1} sx={{
          maxWidth: '60rem',
          textAlign: 'center',
        }}>
          Designed for real world complexity
        </Title>
      </Center>
      <Center mt={'3rem'}>
        <SimpleGrid
          cols={3}
          spacing={'4rem'}
          verticalSpacing={'4rem'}
          sx={{
            width: '100%',
            maxWidth: '90rem',
          }}
        >
          <FeatureGridItem
            icon={SpeechRecognitionIcon}
            title={'State-of-the-art speech recognition'}>
            Navigates noisy environments, accents, soft-spoken conversation, jargon, and acronyms.
          </FeatureGridItem>
          <FeatureGridItem
            icon={AIIcon}
            title={'Custom-built AI for medicine'}>
            Handles nuanced narratives, multiple co-morbid problems, and non-linear communication.
          </FeatureGridItem>
          <FeatureGridItem
            icon={MultiModalIcon}
            title={'Multi-Modal support'}>
            Works for in-person, asynchronous chat, phone call, and video visits.
          </FeatureGridItem>
          <FeatureGridItem
            icon={LongitudinalContextIcon}
            title={'Longitudinal context'}>
            Integrates historical data from the EMR to capture all relevant context for the visit.
          </FeatureGridItem>
          <FeatureGridItem
            icon={MultipleSpeakersIcon}
            title={'Multiple speakers'}>
            Operates with multiple caretakers, parents, and/or children in the conversation.
          </FeatureGridItem>
          <FeatureGridItem
            icon={MultiLingualIcon}
            title={'Multi-lingual'}>
            Creates English documentation for conversations in Spanish, Mandarin, etc.
          </FeatureGridItem>
        </SimpleGrid>
      </Center>
      <Center mt={'10rem'} px={'5rem'} py={'8rem'} sx={{
        backgroundColor: theme.colors.gray[1],
      }}>
        <Group
          noWrap
          spacing={'8rem'}
          position={'apart'}
          sx={{
            width: '100%',
            maxWidth: '80rem',
          }}>
          <Center>
            <Title order={1} sx={{
              maxWidth: '40rem',
            }}>
              See why your providers will never need to type or dictate another note.
            </Title>
          </Center>
          <BookDemoButton/>
        </Group>
      </Center>
    </>
  )
}

function Stats(props: { stats: ReactNode, label: ReactNode }) {
  return <Stack spacing={0} align={'center'} sx={{
    flexBasis: 0,
    flexGrow: 1,
  }}>
    <Text sx={{
      fontSize: '5rem',
      lineHeight: 1,
    }}>
      {props.stats}
    </Text>
    <Text size={'lg'} sx={{
      textAlign: 'center',
    }}>
      {props.label}
    </Text>
  </Stack>
}


function FeatureParagraph(
  props: PropsWithChildren<{
    subTitle: ReactNode,
    title: ReactNode,
    sx?: Sx,
    image: {
      src: StaticImageData,
      mt?: number,
      mr?: number,
      mb?: number,
    }
  }>) {
  const theme = useMantineTheme()
  return <Center px={'5rem'} py={'8rem'} sx={props.sx}>
    <Group
      noWrap
      spacing={'8rem'}
      position={'apart'}
      sx={{
        width: '100%',
        maxWidth: '80rem',
        alignItems: 'start',
      }}>
      <Box>
        <Text sx={{
          color: theme.colors.brandPrimary[6],
          fontSize: '1.5rem',
        }}>
          {props.subTitle}
        </Text>
        <Title order={1} sx={{
          fontSize: '2.5rem',
        }}>
          {props.title}
        </Title>
        <Text mt={'1rem'} sx={{
          fontSize: '1.5rem',
          color: theme.colors.gray[7],
        }}>
          {props.children}
        </Text>
      </Box>
      <Box mt={props.image.mt} mr={props.image.mr} mb={props.image.mb}>
        <Image src={props.image.src} alt={''} width={480}/>
      </Box>
    </Group>
  </Center>
}

function HowItWorksStep(props: PropsWithChildren<{
  step: number,
  title: ReactNode,
  sx?: Sx,
}>) {
  const theme = useMantineTheme()
  return <Group noWrap mt={'3rem'} sx={[
    {
      alignItems: 'flex-start',
    },
    props.sx,
  ]}>
    <Text
      mt={3}
      sx={{
        fontSize: '2rem',
        lineHeight: 1,
        fontWeight: 500,
        flexShrink: 0,
      }}
    >
      {props.step}.
    </Text>
    <Box>
      <Title order={2}>
        {props.title}
      </Title>
      <Text mt={'1rem'} size={'lg'} sx={{
        color: theme.colors.gray[7],
      }}>
        {props.children}
      </Text>
    </Box>
  </Group>
}

function FeatureGridItem({icon: Icon, ...props}: PropsWithChildren<{
  icon: FunctionComponent<PropsWithClassName<{}>>,
  title: ReactNode,
}>) {
  const theme = useMantineTheme()
  return <Stack spacing={0} align={'center'} sx={{
    textAlign: 'center',
  }}>
    <Box
      component={Icon}
      sx={{
        width: '5rem',
        height: '5rem',
        color: theme.colors.brandPrimary[6],
      }}
    />
    <Title order={2} mt={'1.5rem'} sx={{
      fontWeight: 500,
    }}>
      {props.title}
    </Title>
    <Text size={'lg'} mt={'0.75rem'} sx={{
      color: theme.colors.gray[7],
    }}>
      {props.children}
    </Text>
  </Stack>
}