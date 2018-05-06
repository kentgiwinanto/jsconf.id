import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './SectionHeading.module.scss';

/**
 * @typedef {Object} SectionHeadingProps
 * @property {string} title
 * @property {string} [color]
 */

/** @type {React.SFC<SectionHeadingPropsq>} */
const SectionHeading = ({ title, color }) => (
  <header className={classnames(styles.root, styles[color])}>
    <div className={styles.inner}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  </header>
);

SectionHeading.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['primary', 'dark', 'light']),
};

SectionHeading.defaultProps = {
  color: 'primary',
};

export default SectionHeading;
