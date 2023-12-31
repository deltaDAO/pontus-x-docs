import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import { useColorMode } from '@docusaurus/theme-common'

import styles from './index.module.css'

const FeatureList = [
  {
    title: 'Portal',
    Svg: require('@site/static/img/pontus-x-icon.svg').default,
    SvgLight: require('@site/static/img/pontus-x-icon-white.svg').default,
    description: (
      <>
        Enter the Pontus-X Ecosystem through the Main Portal.
      </>
    ),
    action: {
      title: 'Visit Pontus-X Portal',
      link: 'https://pontus-x.eu',
    },
  },
  {
    title: 'Docs',
    Svg: require('@site/static/img/library-books.svg').default,
    SvgLight: require('@site/static/img/library-books-white.svg').default,
    description: (
      <>Get started and discover the core features of the Pontus-X ecosystem.</>
    ),
    action: {
      title: 'Start here',
      link: '/docs/intro',
    },
  },
  {
    title: 'Blog',
    Svg: require('@site/static/img/rss-feed.svg').default,
    SvgLight: require('@site/static/img/rss-feed-white.svg').default,
    description: (
      <>
        Stay informed on the latest developments within the Pontus-X ecosystem.
      </>
    ),
    action: {
      title: 'Visit our Blog',
      link: 'https://blog.delta-dao.com',
    },
  },
  {
    title: 'Github',
    Svg: require('@site/static/img/github-mark.svg').default,
    SvgLight: require('@site/static/img/github-mark-white.svg').default,
    description: (
      <>
        Pontus-X is open to everyone and is entirely governed by its community
        members. We welcome you to contribute to our documentation!
      </>
    ),
    action: {
      title: 'Contribute',
      link: 'https://github.com/deltaDAO/pontus-x-docs',
    },
  },
]

function Feature({ Svg, SvgLight, title, description, action }) {
  const { isDarkTheme } = useColorMode()

  return (
    <div className={clsx('col col--6', styles.feature)}>
      <div className="text--center">
        {isDarkTheme ? (
          <SvgLight className={styles.featureSvg} role="img" />
        ) : (
          <Svg className={styles.featureSvg} role="img" />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p className={styles.description}>{description}</p>
        <Link
          className={clsx('button button--secondary button--md', styles.link)}
          to={action.link}
        >
          {action.title}
        </Link>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={clsx('container', styles.features)}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
