import { ThemeProvider } from '@material-ui/core/styles';
import { AnimatePresence } from 'framer-motion';
import 'html5-device-mockups/dist/device-mockups.css';
import withRedux from 'next-redux-wrapper';
import App from 'next/app';
import 'normalize.css';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import 'prism-themes/themes/prism-darcula.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import React from 'react';
import { Provider } from 'react-redux';
import theme from '~/components/theme';
import configureStore from '~/store';
import '~/styles/app.css';
import '~/styles/tailwind.css';

const Noop = ({ children }) => children;

class CustomApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, router, store } = this.props;

    const Layout = Component.Layout || Noop;

    return (
      <>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Layout>
              <AnimatePresence exitBeforeEnter>
                <Component {...pageProps} key={router.route} />
              </AnimatePresence>
            </Layout>
          </ThemeProvider>
        </Provider>
      </>
    );
  }
}

CustomApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};

  // Anything returned here can be access by the client
  return { pageProps };
};

export default withRedux(configureStore)(CustomApp);
