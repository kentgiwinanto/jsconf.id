import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import styles from './Footer.module.scss';

/**
 * @typedef {Object} FooterProps
 * @property {string} siteName
 */

/** @type {React.SFC<FooterProps>} */
const Footer = ({ siteName }) => (
  <footer className={styles.root}>
    <div>
      <p>&copy; 2018 {siteName}</p>
    </div>
    <nav className={styles.nav}>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/code-of-conduct" href="/code-of-conduct">
            Code of Conduct
          </Link>
        </li>
        <li>
          <Link to="/" href="/">
            Sponsor Interest
          </Link>
        </li>
        <li>Contact Us</li>
      </ul>
    </nav>
  </footer>
);

Footer.propTypes = {
  siteName: PropTypes.string.isRequired,
};

export default Footer;
