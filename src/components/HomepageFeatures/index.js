import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import { useColorMode } from '@docusaurus/theme-common'

import styles from './index.module.css'

const FeatureList = [
  {
    title: 'Blog',
    Svg: require('@site/static/img/rss-feed.svg').default,
    SvgLight: require('@site/static/img/rss-feed-white.svg').default,
    description: (
      <>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum dolorem
        error commodi exercitationem? Rem illo, recusandae.
      </>
    ),
    action: {
      title: 'Visit our Blog',
      link: '/blog',
    },
  },
  {
    title: 'Docs',
    Svg: require('@site/static/img/library-books.svg').default,
    SvgLight: require('@site/static/img/library-books-white.svg').default,
    description: (
      <>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum dolorem
        error commodi exercitationem? Rem illo, recusandae.
      </>
    ),
    action: {
      title: 'Start here',
      link: '/docs/intro',
    },
  },
  {
    title: 'Github',
    Svg: require('@site/static/img/github-mark.svg').default,
    SvgLight: require('@site/static/img/github-mark-white.svg').default,
    description: (
      <>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum dolorem
        error commodi exercitationem? Rem illo, recusandae.
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
    <div className={clsx('col col--4', styles.feature)}>
      <div className="text--center">
        {isDarkTheme ? (
          <SvgLight className={styles.featureSvg} role="img" />
        ) : (
          <Svg className={styles.featureSvg} role="img" />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link className="button button--secondary button--md" to={action.link}>
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
