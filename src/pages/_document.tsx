import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="min-h-screen bg-white font-sans text-slate-500 antialiased dark:bg-slate-800 dark:text-slate-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
