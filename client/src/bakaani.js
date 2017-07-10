import 'bootstrap';
import 'bootstrap-fileinput';

import ReactDOM from 'react-dom';
import React, { Component } from 'react';

import AppComponent from 'components/app';
import SearchForm from 'components/search';
import malicious from './malicious';

import 'styles/bakaani.scss';

document.addEventListener('DOMContentLoaded', () => {
  const dependencies = [
    'components/app',
    'components/search'
  ];

  const render = (Component) => {
    const mount = document.getElementById(Component.displayName);

    if (mount) {
      const props = JSON.parse(mount.dataset.props || '{}');
      ReactDOM.render(<Component {...props} />, mount);
    }
  }

  render(SearchForm);
  render(AppComponent);

  if (module.hot) {
    console.log('Webpack Hot Reload!');

    module.hot.accept(dependencies, () => {
      render(require('components/app').default);
      render(require('components/search').default);
    });
  }

  malicious();
});
