import Document, { Html, Head, Main, NextScript } from 'next/document';
import { AppConfig } from '../utils/AppConfig';

class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          <meta charSet="UTF-8" />
          {/* Removed viewport meta tag from here */}
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content="Your website description here" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
