import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body data-theme="theme-blue">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}