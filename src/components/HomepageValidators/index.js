import React from 'react'
import clsx from 'clsx'
import { useColorMode } from '@docusaurus/theme-common'

import styles from './index.module.css'

export default function HomepageValidators() {
  const { isDarkTheme } = useColorMode()

  const validatorLogosAbsolutePath = require
    .context('../../../static/img/validators', false, /\.(webp|png|jpe?g)$/)
    .keys()

  const validatorLogos = validatorLogosAbsolutePath
    .filter((file) => file.startsWith('./'))
    .map((path) => path.replace('./', ''))

  return (
    <section className={clsx('container', styles.container)}>
      <div
        className={clsx(styles.separator, isDarkTheme && styles.separatorDark)}
      />
      <h2>These are the Pontus-X Network validators</h2>
      <p>
        The Pontus-X ecosystem brings together a multitude of companies and
        institutions from different fields and industries. All of them are
        committed to exploring the benefits of an open ecosystem based on the
        rules of the Gaia-X Trust Framework.
      </p>
      <div className={styles.grid}>
        {validatorLogos.map((logo) => (
          <div key={logo} className={styles.logoContainer}>
            <img
              src={`/img/validators/${logo}`}
              className={styles.logo}
              alt='Validator logo'
            />
          </div>
        ))}
      </div>
    </section>
  )
}
