import React from 'react';
import Link from 'gatsby-link';

import styles from './Header.module.scss';
import Logo from './Logo';

/** @type {React.SFC} */
const Header = () => (
  <header className={styles.root}>
    <div className={styles.inner}>
      <Link to="/" href="/" className={styles.headerLink}>
        <Logo transparent foreground="white" height={50} />
      </Link>
      <nav className={styles.headerNav}>
        <Link to="/" href="/">
          One link
        </Link>
        <Link to="/" href="/">
          Two link
        </Link>
        <Link to="/" href="/">
          Three link
        </Link>
        <Link to="/" href="/">
          Four link
        </Link>
      </nav>
    </div>
  </header>
);

export default Header;
