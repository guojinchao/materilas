import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

export default class ExampleBlock extends Component {
  static displayName = 'ExampleBlock';

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
      <div className={styles['example-block']}>
        example-block
      </div>
    );
  }
}
 