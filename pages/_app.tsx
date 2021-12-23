import React, { FC } from 'react';
import Head from 'next/head';
import 'antd/dist/antd.css';
import { AppProps } from 'next/app';

const Sprout: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Sprout</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default Sprout;
