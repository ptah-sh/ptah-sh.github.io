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
    tag: "script",
    attrs: {
      type: "application/ld+json",
    },
    content: `
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "ptah.sh",
        "applicationCategory": "Infrastructure Management Tool",
        "operatingSystem": "Web-based",
        "offers": {
          "@type": "Offer",
          "price": "14",
          "priceCurrency": "USD"
        },
        "description": "Optimize your infrastructure costs and simplify deployment with ptah.sh."
      }
    `,
  },
];

// https://astro.build/config
export default defineConfig({
  site: "https://ptah.sh",
  integrations: [
    starlight({
      title: "Ptah.sh",
      logo: {
        src: "./src/assets/navbar-logo.svg",
        replacesTitle: true,
      },
      social: {
        "x.com": "https://dub.sh/ptah-sh-twitter",
        discord: "https://dub.sh/ptah-sh-discord",
        github: "https://git.new/ptah-sh-github",
      },
      components: {
        ThemeSelect: "./src/components/auth-header.astro",
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
          link: "/introduction",
        },
        {
          label: "Tutorial",
          autogenerate: { directory: "tutorial" },
        },
        {
          label: "API Docs",
          autogenerate: { directory: "api" },
        },
        {
          label: "Case Studies",
          autogenerate: { directory: "case-studies" },
        },
        {
          label: "Company Blog",
          autogenerate: { directory: "blog" },
          collapsed: true,
        },
      ],
      customCss: ["./src/tailwind.css"],
      head: process.env.NODE_ENV === "production" ? head : [],
      editLink: {
        baseUrl: "https://github.com/ptah-sh/ptah-sh.github.io/edit/main/",
      },
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
