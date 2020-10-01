import { theme } from '@becca/ui';
import { ThemeProvider } from 'emotion-theming';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { ReactComponent as NxLogo } from '../public/nx-logo-white.svg';
import './reset.css';
import './styles.css';

const CustomApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Welcome to homepage!</title>
      </Head>
      <div className="app">
        <header className="flex">
          <NxLogo width="75" height="50" />
          <h1>Welcome to homepage!</h1>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default CustomApp;
