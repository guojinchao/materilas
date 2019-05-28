import React, { Component } from 'react';

export default class ExampleComponent extends Component {
  static displayName = 'ExampleComponent';

  render() {
    return (
      <div className="example-component">Hello ExampleComponent</div>
    );
  }
}
