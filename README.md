This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```

```

```
Codewithashim-V3
├─ .eslintrc.json
├─ .gitignore
├─ components.json
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ lalitha.png
│  ├─ lalithalogo.png
│  ├─ manifest.json
│  └─ twitter.jpg
├─ README.md
├─ src
│  ├─ app
│  │  ├─ favicon.ico
│  │  ├─ fonts
│  │  │  ├─ GeistMonoVF.woff
│  │  │  └─ GeistVF.woff
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  └─ SchemaOrg.tsx
│  ├─ assects
│  │  ├─ images
│  │  │  ├─ lalitha.png
│  │  │  └─ profile.png
│  │  ├─ index.tsx
│  │  └─ logo
│  │     └─ lalithalogo.png
│  ├─ components
│  │  ├─ shared
│  │  │  ├─ AnimationWrapper.tsx
│  │  │  ├─ footer
│  │  │  │  └─ Footer.tsx
│  │  │  ├─ header
│  │  │  │  └─ Header.tsx
│  │  │  └─ ThemeToggle.tsx
│  │  └─ ui
│  │     ├─ alert-dialog.tsx
│  │     ├─ avatar.tsx
│  │     ├─ badge.tsx
│  │     ├─ blur-fade.tsx
│  │     ├─ border-beam.tsx
│  │     ├─ button.tsx
│  │     ├─ card.tsx
│  │     ├─ dialog.tsx
│  │     ├─ icon-cloud.tsx
│  │     ├─ input.tsx
│  │     ├─ pagination.tsx
│  │     ├─ scroll-area.tsx
│  │     ├─ select.tsx
│  │     ├─ separator.tsx
│  │     ├─ skeleton.tsx
│  │     ├─ tabs.tsx
│  │     └─ tooltip.tsx
│  ├─ config
│  │  └─ envConfig.tsx
│  ├─ constant
│  │  └─ data
│  │     ├─ data.tsx
│  │     ├─ experienceData.tsx
│  │     └─ projectData.tsx
│  ├─ features
│  │  ├─ Home
│  │  │  ├─ @components
│  │  │  │  ├─ Experiance.tsx
│  │  │  │  ├─ HeroSection.tsx
│  │  │  │  ├─ ImageSection.tsx
│  │  │  │  ├─ Project.tsx
│  │  │  │  └─ TechStack.tsx
│  │  │  └─ Home.tsx
│  │  └─ Project
│  │     └─ Project.tsx
│  ├─ hooks
│  │  ├─ useDebounce.tsx
│  │  └─ useTheme.tsx
│  ├─ lib
│  │  ├─ network.ts
│  │  └─ utils.ts
│  ├─ schema
│  ├─ styles
│  │  ├─ globals.scss
│  │  ├─ notion.scss
│  │  └─ prism.scss
│  ├─ types
│  │  └─ commonType.ts
│  └─ utils
│     ├─ helper.ts
│     ├─ notion.ts
│     └─ RichTextComponent.tsx
├─ tailwind.config.ts
└─ tsconfig.json

```
```
Codewithashim-V3
├─ .eslintrc.json
├─ .gitignore
├─ components.json
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ lalitha.png
│  ├─ lalithalogo.png
│  ├─ manifest.json
│  └─ twitter.jpg
├─ README.md
├─ src
│  ├─ app
│  │  ├─ favicon.ico
│  │  ├─ fonts
│  │  │  ├─ GeistMonoVF.woff
│  │  │  └─ GeistVF.woff
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  └─ SchemaOrg.tsx
│  ├─ assects
│  │  ├─ images
│  │  │  ├─ lalitha.png
│  │  │  └─ profile.png
│  │  ├─ index.tsx
│  │  └─ logo
│  │     └─ lalithalogo.png
│  ├─ components
│  │  ├─ shared
│  │  │  ├─ AnimationWrapper.tsx
│  │  │  ├─ footer
│  │  │  │  └─ Footer.tsx
│  │  │  ├─ header
│  │  │  │  └─ Header.tsx
│  │  │  └─ ThemeToggle.tsx
│  │  └─ ui
│  │     ├─ alert-dialog.tsx
│  │     ├─ avatar.tsx
│  │     ├─ badge.tsx
│  │     ├─ blur-fade.tsx
│  │     ├─ border-beam.tsx
│  │     ├─ button.tsx
│  │     ├─ card.tsx
│  │     ├─ dialog.tsx
│  │     ├─ icon-cloud.tsx
│  │     ├─ input.tsx
│  │     ├─ pagination.tsx
│  │     ├─ scroll-area.tsx
│  │     ├─ select.tsx
│  │     ├─ separator.tsx
│  │     ├─ skeleton.tsx
│  │     ├─ tabs.tsx
│  │     └─ tooltip.tsx
│  ├─ config
│  │  └─ envConfig.tsx
│  ├─ constant
│  │  └─ data
│  │     ├─ data.tsx
│  │     ├─ experienceData.tsx
│  │     └─ projectData.tsx
│  ├─ features
│  │  ├─ Home
│  │  │  ├─ @components
│  │  │  │  ├─ Experiance.tsx
│  │  │  │  ├─ HeroSection.tsx
│  │  │  │  ├─ ImageSection.tsx
│  │  │  │  ├─ Project.tsx
│  │  │  │  └─ TechStack.tsx
│  │  │  └─ Home.tsx
│  │  └─ Project
│  │     └─ Project.tsx
│  ├─ hooks
│  │  ├─ useDebounce.tsx
│  │  └─ useTheme.tsx
│  ├─ lib
│  │  ├─ network.ts
│  │  └─ utils.ts
│  ├─ schema
│  ├─ styles
│  │  ├─ globals.scss
│  │  ├─ notion.scss
│  │  └─ prism.scss
│  ├─ types
│  │  └─ commonType.ts
│  └─ utils
│     ├─ helper.ts
│     ├─ notion.ts
│     └─ RichTextComponent.tsx
├─ tailwind.config.ts
└─ tsconfig.json

```