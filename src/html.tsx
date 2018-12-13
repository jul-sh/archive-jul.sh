import React from 'react'
import { FONTS_URLS } from '~/constants'

const GREETING = `/*


🔵🔵🔵🔵🔵🔴🔴🔴🔴🔴🔴
🔵🔵🔵🔵🔵🔴🔴🔴🔴🔴🔴
🔵🔵🔵🔵🔵🔴🔴🔴🔴🔴🔴
🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴


Hey astronaut. You can view the uncompiled soure code at https://github.com/juliettepretot/juliette.sh :)


*/`

interface HtmlProps {
  htmlAttributes: any
  headComponents: any
  preBodyComponents: any
  body: any
  bodyAttributes: any
  postBodyComponents: any
}

const HTML: React.FunctionComponent<HtmlProps> = props => (
  <html lang="en" {...props.htmlAttributes}>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>Juliette Pretot</title>
      <meta name="description" content="Frontend Engineer" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
      />
      <link
        rel="preload"
        href={FONTS_URLS.regular}
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href={FONTS_URLS.bold}
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href={FONTS_URLS.sans}
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <meta name="theme-color" content="#101722" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link rel="shortcut icon" href="/favicons/favicon.ico" />
      <script
        dangerouslySetInnerHTML={{
          __html: GREETING
        }}
      />
      {props.headComponents}
    </head>
    <body {...props.bodyAttributes}>
      {props.preBodyComponents}
      <div
        key={'body'}
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: props.body }}
      />
      {props.postBodyComponents}
    </body>
  </html>
)

export default HTML
