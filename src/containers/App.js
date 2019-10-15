// @flow
import type { Node } from 'react';
import React, { Component, Fragment } from 'react';

type Props = {
  children: Node
}

export default class App extends Component<Props> {
  render() {
    const { children } = this.props;
    return (
      <Fragment>
        {children}
      </Fragment>
    )
  }
}
