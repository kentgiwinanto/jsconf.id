import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import 'normalize.css';
import 'typeface-roboto';
import '../styles/global.scss';

import styles from './index.module.scss';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer';
import SectionHeading from '../components/ui/SectionHeading';

const Layout = ({ children, data }) => (
  <div className={styles.root}>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <Fragment>{children()}</Fragment>
    <div style={{ padding: '2.5rem 1.5rem' }}>
      <SectionHeading title="Sponsors" color="dark" />
      <h2>Platinum</h2>
    </div>
    <Footer siteName={data.site.siteMetadata.title} />
  </div>
);

Layout.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.shape({}).isRequired,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
