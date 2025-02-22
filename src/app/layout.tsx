import type { Metadata } from "next";
import "@/src/styles/globals.scss";
import "@/src/styles/prism.scss";
import "@/src/styles/notion.scss";
import SchemaOrg from "./SchemaOrg";
import AnimationWrapper from "../components/shared/AnimationWrapper";
import Header from "../components/shared/header/Header";
import Footer from "../components/shared/footer/Footer";
export const metadata: Metadata = {
  title: "Lalitha Sri Vidhara | Portfolio",
  description: "An Undergraduate Student currently persuing the BSc.in Information Systems at SUSL. Passionate about building innovative and scalable solutions while staying at the forefront of emerging technologies and industry trends.",
  keywords: "Lalitha Sri Vidhara, Software Engineer, Full Stack Developer, MERN Stack, TypeScript, Next.js, React Native, AWS, Docker, JavaScript, MongoDB, Express.js, Node.js, PostgreSQL, MySQL, Laravel, GraphQL, Prisma, Fastify",
  authors: [{ name: "Lalitha Sri Vidhara", url: "test" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "test",
    siteName: "Lalitha Sri Vihdara - Portfolio",
    title: "Lalitha Sri Vidhara | Portfolio",
    description: "Undergraduate Student | Full Stack Developer | Technophile",
    images: [
      {
        url: "/lalitha.png",
        width: 1200,
        height: 630,
        alt: "Lalitha Sri Vidhara - Portfolio",
      },
    ],
  },
  
  // verification: {
  //   google: "YOUR_GOOGLE_VERIFICATION_STRING",
  //   yandex: "YOUR_YANDEX_VERIFICATION_STRING",
  //   me: "YOUR_ME  VERIFICATION_STRING",
  //   other: {
  //     "facebook-domain-verification": ["YOUR_FACEBOOK_DOMAIN_VERIFICATION_CODE"],
  //     "google-site-verification": ["YOUR_GOOGLE_SITE_VERIFICATION_CODE"],
  //   },
  // },
  icons: {
    icon: [
      { url: "/lalitha.png" },
      { url: "/lalitha.png", type: "image/jpg", sizes: "32x32" },
    ],
    apple: [
      { url: "/lalitha.png", sizes: "180x180", type: "image/jpg" },
    ],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "test",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export const themeColor = [
  { media: "(prefers-color-scheme: light)", color: "#ffffff" }, // Light mode theme color
  { media: "(prefers-color-scheme: dark)", color: "#000000" }, // Dark mode theme color
];



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <SchemaOrg />
      </head>
      <body>
        <AnimationWrapper>
          <main className="flex-1">{children}</main>
          <Header />
          <Footer />
        </AnimationWrapper>
      </body>
    </html>
  );
}