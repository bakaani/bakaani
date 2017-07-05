import ReactDOM from 'react-dom';
import React, { Component } from 'react';

import AppComponent from 'components/app';

document.addEventListener('DOMContentLoaded', () => {
  const render = (Component) => {
    ReactDOM.render(<Component />, document.getElementById('app'));
  }

  render(AppComponent);
  if (module.hot) {
    console.log('Webpack Hot Reload!');

    module.hot.accept('components/app', () => {
      render(require('components/app').default);
    });
  }
});
