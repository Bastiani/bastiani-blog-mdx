/* eslint-disable react/display-name */
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { MDXProvider } from "@mdx-js/react";

import CodeBlock from "../components/CodeBlock";
import Content from "../components/Layout/Content";
import Header from "../components/Layout/Header";
import Main from "../components/Layout/Main";

const components = {
  pre: (props: any) => <div {...props} />,
  code: (props: any) => <CodeBlock {...props} />,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "pt_BR",
          url: "https://www.rafaelbastiani.com/",
          // @ts-ignore
          site_name: "Rafael Campos de Bastiani",
        }}
        twitter={{
          handle: "@RBastiani",
          site: "@RBastiani",
          cardType: "summary_large_image",
        }}
      />
      {/* <GlobalStyle /> */}
      {/* <ThemeProvider theme={theme}> */}
      <Content>
        <Header />
        <Main>
          <MDXProvider components={components}>
            <Component {...pageProps} />
          </MDXProvider>
        </Main>
      </Content>
      {/* </ThemeProvider> */}
    </>
  );
}
export default MyApp;
