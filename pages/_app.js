import '../styles/globals.css';
import React from 'react';
import PropTypes from 'prop-types';

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
