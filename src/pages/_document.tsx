import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="um site onde eu mostro todos os meus trabalhos desenvolvidos"
          />
        </Head>
        <body className="bg-gradient-to-r from-green to-blue-400 dark:from-dark-500 dark:to-dark-700 dark:text-white">
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}
