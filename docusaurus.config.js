// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "PrChan's Website",
  tagline: "Welcome!",
  url: "https://prchan.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.svg",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "prchann", // Usually your GitHub org/user name.
  projectName: "prchann.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/prchann/prchann.github.io/tree/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/prchann/prchann.github.io/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-JYEV2TW7P7",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "PrChan",
        logo: {
          alt: "prchan.com",
          src: "img/logo.svg",
        },
        items: [
          { to: "/docs/basic", label: "基础", position: "left" },
          { to: "/docs/code", label: "编码", position: "left" },
          { to: "/docs/convention", label: "规范", position: "left" },
          { to: "/blog", label: "博客", position: "left" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "文档",
            items: [
              {
                label: "基础",
                to: "/docs/basic",
              },
              {
                label: "编码",
                to: "/docs/code",
              },
              {
                label: "规范",
                to: "/docs/convention",
              },
              {
                label: "博客",
                to: "/blog",
              },
            ],
          },
          {
            title: "关于",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/prchann",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/prchann",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} prchan.com. <a href="https://beian.miit.gov.cn/" target="_blank" style="color: inherit; font-size: 14px;">粤ICP备2022033958号-1</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
	docs: {
		sidebar: {
			hideable: true,
			autoCollapseCategories: true,
		}
	}
    }),
};

module.exports = config;
