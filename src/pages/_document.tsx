import Document, { Html, Head, Main, NextScript } from 'next/document';
import { AppConfig } from '../utils/AppConfig';

class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          <meta name="google-site-verification" content="IpO4aerloBI3BMSwDrjy4aar5CzFvPSOQh7Z9qTcvl0" />
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
