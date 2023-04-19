import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ar" dir='rtl'>
      <Head />
      <body>
        <Main />
        <NextScript />
        <script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript"></script> 
      </body>
    </Html>
  )
}
