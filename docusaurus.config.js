// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pontus-X Documentation',
  tagline: 'powered by Gaia-X',
  url: 'https://docs.pontus-x.eu/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'deltaDAO', // Usually your GitHub org/user name.
  projectName: 'pontus-x-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/deltaDAO/pontus-x-docs/tree/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/deltaDAO/pontus-x-docs/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/preview.png',
      metadata: [
        { name: 'twitter:title', content: 'Pontus-X Documentation' },
        {
          name: 'twitter:description',
          content:
            'The Pan-European Pontus-X network is owned by no one and open to everyone, entirely run and governed by Gaia-X community members dedicated to the Gaia-X Trust Framework.',
        },
      ],
      navbar: {
        title: 'Pontus-X Documentation',
        logo: {
          alt: 'Pontus-X Logo',
          src: 'img/pontus-x-icon.svg',
          srcDark: 'img/pontus-x-icon-white.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: 'Docs',
          },
          {
            href: 'https://blog.delta-dao.com',
            label: 'Blog',
            position: 'right',
          },
          {
            href: 'https://github.com/deltaDAO/pontus-x-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get Started',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Pontus-X Portal',
                href: 'https://portal.pontus-x.eu/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/deltaDAO/pontus-x-docs',
              },
              {
                label: 'Privacy',
                href: '/privacy',
              },
              {
                label: 'Imprint',
                href: '/imprint',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} deltaDAO AG.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
