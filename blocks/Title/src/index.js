import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

export default class Title extends Component {
  static displayName = 'Title';

  static propTypes = {
    value: PropTypes.string
  };

  static defaultProps = {
    value: 'string data'
  };

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className={styles['title']}>
        title
      </div>
    );
  }
}
