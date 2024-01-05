import Document, { Html, Main, Head, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return <Html lang="en">
      <Head>
        <meta name='description' content='NextJS Events' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <body>
        <Main /> {/*this is where the page content is rendered */}
        <NextScript />
      </body>
    </Html>;
  }
}

export default MyDocument;