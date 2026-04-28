import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config = {
  title: "来发信",
  tagline: "让外贸企业开发客户更简单高效！", // 您可以根据需要修改或保留
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://www.laifa.xin",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  trailingSlash: false, // <-- 设置为 false，URL 将不以 / 结尾

  scripts: ["/js/redirects.js"],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "suxuemi", // Usually your GitHub org/user name.
  projectName: "laifaxin", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en'],
  // },

  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans", "en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          routeBasePath: "/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  // 搜索插件不支持中文
  plugins: [
    //   [
    //     require.resolve("docusaurus-plugin-search-local"),
    //     {
    //       highlightSearchTermsOnTargetPage: true,
    //       hashed: true,
    //       indexDocs: true,
    //       indexBlog: true,
    //     },
    "docusaurus-plugin-image-zoom", // 添加图片缩放插件
  ],
  // ],

  // 搜索插件支持中文  使用 npm run serve 运行项目测试搜索
  themes: [
    // 搜索主题
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        hashed: true,
        language: ["en", "zh"],
        docsRouteBasePath: "/",
      },
    ],
    // Mermaid 主题
    require.resolve('@docusaurus/theme-mermaid'),
  ],

  markdown: {
    mermaid: true,
  },

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    zoom: {
      // 添加 zoom 配置
      selector: ".markdown img", //  CSS 选择器，用于指定哪些图片应用缩放效果
      background: {
        light: "rgb(255, 255, 255)",
        dark: "rgb(50, 50, 50)",
      },
      // medium-zoom 的其他配置项，可以参考 https://github.com/francoischalifour/medium-zoom#usage
      config: {},
    },
    navbar: {
      title: "来发信",
      logo: {
        alt: "来发信logo",
        src: "img/favicon.ico",
      },
      items: [
        {
          type: "dropdown",
          position: "left",
          label: "指南",
          items: [
            {
              label: "1️⃣ 快速上手",
              type: "doc",
              docId: "zhinan/meet-laifaxin", // Example docId, adjust as needed
            },
            {
              label: "2️⃣ 客户搜索",
              type: "doc",
              docId: "zhinan/customer-search", // Example docId
            },
            {
              label: "3️⃣ 客户管理",
              type: "doc",
              docId: "zhinan/customer-management", // Example docId
            },
            {
              label: "4️⃣ 邮件群发",
              type: "doc",
              docId: "zhinan/email-mass-sending", // Example docId
            },
            {
              label: "5️⃣ 邮箱验证",
              type: "doc",
              docId: "zhinan/email-verification", // Example docId
            },
            {
              label: "6️⃣ 邮件追踪",
              type: "doc",
              docId: "zhinan/email-tracking", // Example docId
            },
            {
              label: "7️⃣ 背调客户",
              type: "doc",
              docId: "zhinan/customer-website-search", // Example docId
            },
            {
              label: "8️⃣ 企业管理",
              type: "doc",
              docId: "zhinan/business-management", // Example docId
            },
          ],
        },
        {
          type: "docSidebar",
          sidebarId: "khkfSidebar",
          position: "left",
          label: "📚 获客",
        },
        {
          type: "docSidebar",
          sidebarId: "youxiangSidebar",
          position: "left",
          label: "📧 邮箱",
        },
        {
          type: "dropdown",
          position: "left",
          label: "📢分享",
          items: [
            {
              type: "html",
              value: "<strong>邮件</strong>",
            },
            {
              label: "开发篇",
              type: "doc",
              docId: "share/email/ai-generate-multi-round-cold-email-sequences",
            },
            {
              label: "跟进篇（待更新）",
              href: "#",
            },
            {
              type: "html",
              value: '<hr class="dropdown-separator">',
            },
            {
              type: "html",
              value: "<strong>邮箱</strong>",
            },
            {
              label: "免费篇",
              type: "doc",
              docId: "share/mailbox/apply-for-free-email",
            },
            {
              label: "付费篇（待更新）",
              href: "#",
            },
            {
              type: "html",
              value: '<hr class="dropdown-separator">',
            },
            {
              type: "html",
              value: "<strong>工具</strong>",
            },
            {
              label: "软件篇（待更新）",
              href: "#",
            },
            {
              label: "插件篇（待更新）",
              href: "#",
            },
            {
              type: "html",
              value: '<hr class="dropdown-separator">',
            },
            {
              type: "html",
              value: "<strong>教程</strong>",
            },
            {
              label: "逻辑篇（待更新）",
              href: "#",
            },
            {
              label: "客户篇（待更新）",
              href: "#",
            },
            {
              label: "建站篇",
              type: "doc",
              docId: "share/website/ai-powered-website-in-10-minutes",
            },
          ],
        },
        {
          type: "dropdown",
          position: "left",
          label: "🗺️ 地图",
          items: [
            {
              label: "1️⃣产品介绍",
              to: "/google-maps",
            },
            {
              label: "2️⃣下载安装",
              type: "doc",
              docId: "chajian/how-to-install-google-maps-plugin",
            },
            {
              label: "3️⃣使用说明",
              type: "doc",
              docId: "chajian/how-to-use-google-maps-plugin",
            },
            {
              label: "4️⃣AI筛选商家",
              type: "doc",
              docId: "chajian/ai-filter-google-maps-business",
            },
            {
              label: "5️⃣邮箱抓取",
              type: "doc",
              docId: "chajian/how-to-extract-email-from-google-maps",
            },
          ],
        },
        // {to: '/blog', label: 'Blog', position: 'left'}, // 注释掉博客链接
        {
          href: "/reg",
          label: "注册",
          position: "right",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        {
          type: "dropdown",
          position: "right",
          label: "更多",
          items: [
            {
              label: "登录",
              href: "https://web.laifaxin.com/",
            },
          ],
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "来发信",
          items: [
            {
              html: `
              为外贸企业提供<strong>全球营销的一站式服务平台</strong>，集<strong>客户搜索、邮件营销、社媒营销、邮件收发、客户管理</strong>为一体，为业务出海提供<strong>高性价比选择</strong>，助力<strong>快速拓展全球市场</strong>！
              `,
            },
          ],
        },
        {
          title: "常用功能",
          items: [
            {
              label: "客户搜索",
              to: "/zhinan/customer-search",
            },
            {
              label: "客户管理",
              to: "/zhinan/customer-management",
            },
            {
              label: "邮件营销",
              to: "/zhinan/email-mass-sending",
            },
            {
              label: "邮箱验证",
              to: "/zhinan/email-verification",
            },
            {
              label: "邮件追踪",
              to: "/zhinan/email-tracking",
            },
          ],
        },
        {
          title: "企业管理",
          items: [
            {
              label: "部门架构",
              to: "/zhinan/department-management",
            },
            {
              label: "成员管理",
              to: "/zhinan/member-management",
            },
            {
              label: "权限控制",
              to: "/zhinan/permissions-management",
            },
            {
              label: "数据同步",
              to: "/zhinan/sync-management",
            },
            {
              label: "客户归属",
              to: "/zhinan/ownership-management",
            },
          ],
        },
        {
          title: "联系我们",
          items: [
            {
              html: `
                <img src="https://cos.files.maozhishi.com/data/web/web-files/wx/tony-apan.png" alt="微信二维码" style="width: 120px" />
              `,
            },
          ],
        },
      ],
      copyright: `版权所有 © 2020-${new Date().getFullYear()} 南京知机信息科技有限公司   <a href="https://cos.files.maozhishi.com/data/web/web-files/img/icp-lfx.png">增值电信业务经营许可证: 苏B2-20230301</a>   <a href="https://beian.miit.gov.cn/#/Integrated/index">苏ICP备2020062894号</a> <a href="https://beian.mps.gov.cn/#/query/webSearch?code=32011202000971"><img src="https://www.laifaxin.com/assets/images/bn.png" alt="公安备案" style="height: 16px; width: auto; display: inline-block; vertical-align: middle; margin: 0 5px;">苏公网安备32011202000971</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
