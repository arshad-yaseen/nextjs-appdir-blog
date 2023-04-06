import "./globals.css";

export const metadata = {
  title: "Next.js App Dir Blog",
  description: "This is a blog app built with Next.js 13 app folder and Contentlayer. It is a great example of how to use Next.js 13 app folder and Contentlayer together.",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        size: "32x32",
      },
      {
        url: "/favicon.ico",
        size: "16x16",
      },
      {
        url: "/favicon.ico",
        size: "64x64",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js App Dir Blog",
    description: "This is a blog app built with Next.js 13 app folder and Contentlayer. It is a great example of how to use Next.js 13 app folder and Contentlayer together.",
    siteId: "Next.js App Dir Blog",
    creator: "@arshadyaseeen",
    images: ["/og-image.png"],
  },
  openGraph: {
    title: "Next.js App Dir Blog",
    description: "This is a blog app built with Next.js 13 app folder and Contentlayer. It is a great example of how to use Next.js 13 app folder and Contentlayer together.",
    type: "website",
    url: "https://nextjs-appdir-blog.vercel.app",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 720,
        type: "image/jpeg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
