import React, { FC } from 'react';
import Head from 'next/head';
import 'antd/dist/antd.css';
import { AppProps } from 'next/app';
import AppLayout from '@components/AppLayout';

const Sprout: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Sprout</title>
      </Head>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
};

export default Sprout;
