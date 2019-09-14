import { DefaultSeo } from 'next-seo';
import App from 'next/app';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import Router from 'next/router';
import { ThemeProvider, theme } from '@chakra-ui/core';

import CodeBlock from '../components/CodeBlock';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    text-size-adjust: 100%;
    text-rendering: optimizelegibility;
    background-color: #f5f5f5;
  }
`;

const components = {
  pre: props => <div {...props} />,
  code: props => <CodeBlock {...props} />,
};

// @ts-ignore
class MyApp extends App {
  componentDidMount() {
    // @ts-ignore
    Router.beforePopState(({ as }) => {
      location.href = as;
    });
  }
  public render() {
    // @ts-ignore
    const { Component, pageProps } = this.props;

    return (
      <>
        <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'pt_BR',
            url: 'https://www.rafaelbastiani.com/',
            // @ts-ignore
            site_name: 'Rafael Campos de Bastiani',
          }}
          twitter={{
            handle: '@RBastiani',
            site: '@RBastiani',
            cardType: 'summary_large_image',
          }}
        />
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <MDXProvider components={components}>
            <Component {...pageProps} />
          </MDXProvider>
        </ThemeProvider>
      </>
    );
  }
}

export default MyApp;
