import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

const head = [
  {
    tag: "script",
    attrs: {
      async: true,
      src: "https://www.googletagmanager.com/gtag/js?id=G-0D6LCHDZB8",
    },
  },
  {
    tag: "script",
    content:
      "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-0D6LCHDZB8');",
  },
  {
    tag: "meta",
    attrs: {
      name: "keywords",
      content:
        "ptah.sh, infrastructure management, devops, cost optimization, self-hosting, deployment automation, fair source license, startup tools",
    },
  },
  {
    tag: "meta",
    attrs: {
      property: "og:image",
      content: "https://ptah.sh/og-image.png",
    },
  },
  {
    tag: "meta",
    attrs: {
      property: "og:image:width",
      content: "1200",
    },
  },
  {
    tag: "meta",
    attrs: {
      property: "og:image:height",
      content: "630",
    },
  },
  {
    tag: "meta",
    attrs: {
      property: "og:image:type",
      content: "image/png",
    },
  },
  {
    tag: "meta",
    attrs: {
      name: "twitter:card",
      content: "summary_large_image",
    },
  },
  {
    tag: "meta",
    attrs: {
      name: "twitter:site",
      content: "@ptah_sh",
    },
  },
  {
    tag: "meta",
    attrs: {
      name: "twitter:title",
      content: "Ptah.sh - Self-Hosted made Easy",
    },
  },
  {
    tag: "meta",
    attrs: {
      name: "twitter:description",
      content: "Flexible, fair source and independent alternative to Heroku that puts you in control of your expenses.",
    },
  },
  {
    tag: "meta",
    attrs: {
      name: "twitter:image",
      content: "https://ptah.sh/og-image.png",
    },
  },
  {
    tag: "meta",
    attrs: {
      name: "twitter:image:alt",
      content: "Ptah.sh - Self-Hosted made Easy",
    },
  }
];

// https://astro.build/config
export default defineConfig({
  site: "https://ptah.sh",
  integrations: [
    starlight({
      title: "Ptah.sh",
      favicon: "favicon.svg",
      logo: {
        src: "./src/assets/navbar-logo.svg",
        replacesTitle: true,
      },
      social: {
        "x.com": "https://r.ptah.sh/twitter",
        discord: "https://r.ptah.sh/chat",
        "youtube": "https://r.ptah.sh/youtube",
        github: "https://github.com/ptah-sh/ptah-server",
      },
      components: {
        ThemeSelect: "./src/components/auth-header.astro",
        Footer: "./src/components/Footer.astro",
        Hero: "./src/components/Hero.astro",
      },
      sidebar: [
        // {
        // 	label: 'Guides',
        // 	items: [
        // 		// Each item here is one entry in the navigation menu.
        // 		{ label: 'Example Guide', link: '/guides/example/' },
        // 	],
        // },
        // {
        // 	label: 'Reference',
        // 	autogenerate: { directory: 'reference' },
        // },
        {
          label: "Introduction",
          link: "/introduction/",
        },
        {
          label: "Tutorial",
          items: [
            { slug: 'tutorial/', label: 'Overview' },
            { slug: 'tutorial/vps/' },
            { label: 'Cloud-Hosted Panel', 
              items: [
                { slug: 'tutorial/cloud/' },
              ]
            },
            {
              label: 'Self-Hosted Panel',
              items: [
                { slug: 'tutorial/self-hosted/' },
              ]
            },
            {
              slug: 'tutorial/service/',
            },
            {
              slug: 'tutorial/whats-next/',
            }
          ],
        },
        {
          label: "Concepts",
          autogenerate: { directory: "concepts" },
        },
        {
          label: "CI/CD",
          autogenerate: { directory: "api" },
        },
        {
          label: "Case Studies",
          autogenerate: { directory: "case-studies" },
        },
        {
          label: "Compare",
          autogenerate: { directory: "compare" },
        },
        {
          label: "Company Blog",
          autogenerate: { directory: "blog" },
        },
      ],
      customCss: ["./src/tailwind.css", "./src/styles/starlight-content.css"],
      head: process.env.NODE_ENV === "production" ? head : [],
      editLink: {
        baseUrl: "https://github.com/ptah-sh/ptah-sh.github.io/edit/main/",
      },
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
