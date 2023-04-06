import "./globals.css";

export const metadata = {
  title: "Next.js App Dir Blog",
  description: "Blog app with new Next.js 13 app folder and Contentlayer",
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
    description: "Blog app with new Next.js 13 app folder and Contentlayer",
    siteId: "Next.js App Dir Blog",
    creator: "@arshadyaseeen",
    images: ["/og-image.png"],
  },
  openGraph: {
    title: "Next.js App Dir Blog",
    description: "Blog app with new Next.js 13 app folder and Contentlayer",
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
