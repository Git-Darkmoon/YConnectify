import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import "easymde/dist/easymde.min.css"

const workSans = localFont({
  src: [
    {
      path: "./fonts/WorkSans-Black.woff2",
      weight: "900",
    },
    {
      path: "./fonts/WorkSans-ExtraBold.woff2",
      weight: "800",
    },
    {
      path: "./fonts/WorkSans-Bold.woff2",
      weight: "700",
    },
    {
      path: "./fonts/WorkSans-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "./fonts/WorkSans-Medium.woff2",
      weight: "500",
    },
    {
      path: "./fonts/WorkSans-Regular.woff2",
      weight: "400",
    },
    {
      path: "./fonts/WorkSans-Light.woff2",
      weight: "300",
    },
    {
      path: "./fonts/WorkSans-Thin.woff2",
      weight: "200",
    },
    {
      path: "./fonts/WorkSans-ExtraLight.woff2",
      weight: "100",
    },
  ],
  variable: "--font-work-sans",
})

export const metadata: Metadata = {
  title: "YConnectify",
  description: "Pitch, Vote and Connect with Your Startup Community",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={workSans.variable}>{children}</body>
    </html>
  )
}
