// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Jiter Docs",
  tagline: "Just In Time Webhooks",
  url: "https://jiter.dev/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/jiter_favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Pantheon-Labs", // Usually your GitHub org/user name.
  projectName: "Jiter-Docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          showReadingTime: true,
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            defaultReadingTime({ content, options: { wordsPerMinute: 220 } }),
          editUrl: "https://github.com/Pantheon-Labs/Jiter-Docs/blob/main",
        },

        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/Pantheon-Labs/Jiter-Docs/blob/main",
          routeBasePath: "/",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl: "https://github.com/Pantheon-Labs/Jiter-Docs",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Jiter Docs",
        logo: {
          alt: "Jiter Logo",
          src: "img/jiter_logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "getting-started",
            position: "left",
            label: "Documentation",
          },
          {
            href: "https://www.npmjs.com/package/@jiter/node",
            position: "left",
            label: "npm",
          },
          { to: "blog", label: "Blog", position: "right" },
          {
            href: "https://calendly.com/jiter/demo",
            position: "left",
            label: "Chat with Us",
          },
          {
            href: "https://app.jiter.dev",
            position: "right",
            label: "Dashboard",
          },
          {
            href: "https://github.com/Pantheon-Labs/Jiter-Docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },

      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Getting Started",
                to: "/getting-started",
              },
              {
                label: "REST API",
                to: "/category/rest-api",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.com/invite/NPC6GBDBXp",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Node SDK",
                href: "https://github.com/Pantheon-Labs/jiter-node",
              },
              {
                label: "Contribute",
                href: "https://github.com/Pantheon-Labs/Jiter-Docs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jiter - Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
