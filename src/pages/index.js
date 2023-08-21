import React from 'react'
import clsx from 'clsx'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
import HomepageValidators from '@site/src/components/HomepageValidators'

import styles from './index.module.css'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.container)}>
        <h1 className={clsx('container', 'hero__title', styles.title)}>
          {siteConfig.title}
        </h1>
        <p className={clsx('container', 'hero__subtitle', styles.subtitle)}>
          {siteConfig.tagline}
        </p>
      </div>
    </header>
  )
}

export default function Home() {
  return (
    <Layout
      title="Pontus-X Documentation"
      description="The Pan-European Pontus-X network is owned by no one and open to everyone, entirely run and governed by Gaia-X community members dedicated to the Gaia-X Trust Framework."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageValidators />
      </main>
    </Layout>
  )
}
