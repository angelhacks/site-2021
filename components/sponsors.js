import React from 'react'
import styled from '@emotion/styled'
import { Box } from 'rebass'
import { Container } from './blocks'
import { useColorMode } from 'theme-ui'
import theme from './theme'

const data = {
  sponsors: [
    {
      name: 'Repl.it',
      link: 'https://repl.it',
      image:
        'https://cdn.glitch.com/747f5921-6fdc-45db-8eaa-ac12523e0e6c%2Freplit.png?v=1566159656031'
    },
    {
      name: 'Hack Club Bank',
      link: 'https://hackclub.com/bank',
      image:
        'https://cdn.glitch.com/747f5921-6fdc-45db-8eaa-ac12523e0e6c%2Fhackclub-bank.svg?v=1566159701206'
    },
    {
      name: 'David and Daniil Libermans',
      link: 'https://frank.ly',
      image: '/frank-logo.png'
    },
    {
      name: 'GoGuardian',
      link: 'https://www.goguardian.com/',
      image: '/goguardian-logo.png'
    },
    {
      name: 'InspiritAI',
      link: 'https://www.inspiritai.com/',
      image: '/inspiritai.png'
    },
    {
      name: 'H&M',
      link: 'https://www2.hm.com/en_us/index.html',
      image: '/hm-logo.jpg'
    },
  ],
  additionalSupport: [
    {
      name: 'Sticker Mule',
      link: 'https://stickermule.com/',
      image:
        '/stickermule-logo.png'
    },
    {
      name: 'DeepAI',
      link: 'https://deepai.org/',
      image:
        '/deepai-logo.png'
    },
    {
      name: 'Github',
      link: 'https://github.com/',
      image:
        '/Github-logo.png'
    },
    {
      name: 'Inside Dev',
      link: 'http://inside.com',
      image: '/inside-dev.png'
    },
    {
      name: '4Space',
      link: 'http://4space.co',
      image: '/4Space.jpg'
    },
    {
      name: 'Rolling Robots',
      link: 'http://rollingrobots.com',
      image: '/rolling-robots.png'
    },
    {
      name: 'Pinnacle',
      link: 'https://pinnacle.us.org/',
      image: '/pinnacle.png'
    },
    {
      name: 'National Space Society',
      link: 'https://space.nss.org/',
      image: '/nss-logo.png'
    },
    {
      name: 'Balsamiq',
      link: 'https://balsamiq.com/',
      image: '/balsamiq-logo.png'
    },
    {
      name: 'Memorize.AI',
      link: 'https://memorize.ai/',
      image: '/memorizeai.png'
    },
    {
      name: 'CynderHost',
      link: 'https://cynderhost.com/',
      image: '/cynderhost.png'
    },
    {
      name: 'Advin Servers',
      link: 'https://advinservers.com/',
      image: '/advin.png'
    },{
      name: 'Vercel',
      link: 'https://vercel.com/',
      image: '/vercel.png'
    },
    {
      name: 'Anomaly Science',
      link: 'https://anomaly-science.com/',
      image: '/anomaly-science.png'
    },
    {
      name: 'Illumination Entertainment',
      link: 'https://www.illuminationmacguff.com/',
      image: '/illumination.png'
    },  
    {
      name: 'Comcast',
      link: 'https://corporate.comcast.com/',
      image: '/comcast-logo.png'
    },  
  ]
}

const Base = styled(Box)`
  display: grid;
  grid-row-gap: ${theme.space[2]}px;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${props => (props.section === 'sponsors' ? 256 : 192)}px, 1fr)
  );
  align-items: center;
  justify-content: center;
  justify-items: center;
  margin-bottom: ${theme.space[4]}px;
  a {
    width: 100%;
  }
  img {
    max-width: 75%;
    max-height: ${props => (props.section === 'sponsors' ? 6 : 4)}rem;
    ${props =>
    props.colorMode === 'dark' && `filter: invert() hue-rotate(180deg);`}
  }
`

const Sponsors = ({ section = 'sponsors', ...props }) => {
  const [colorMode] = useColorMode()
  return (
    <Base colorMode={colorMode} section={section} {...props}>
      {data[section].map(sponsor => (
        <a href={sponsor.link} target="_blank" key={sponsor.name}>
          <img alt={sponsor.name} src={sponsor.image} />
        </a>
      ))}
    </Base>
  )
}

export default Sponsors
