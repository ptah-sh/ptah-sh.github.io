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
        "x.com": "https://x.com/ptah_sh",
        github: "https://github.com/ptah-sh",
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
          label: "Case Studies",
          autogenerate: { directory: "case-studies" },
        },
      ],
      customCss: ["./src/tailwind.css"],
      head: process.env.NODE_ENV === "production" ? head : [],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
