import 'bootstrap';
import 'bootstrap-fileinput';

import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { createStore } from 'redux';

import AppComponent from 'components/app';
import SearchForm from 'components/search';
import GenrePage from 'containers/genre';

import appStore from 'stores/genre';
import genreStore from 'stores/genre';
import searchStore from 'stores/genre';

import malicious from './malicious';

import 'styles/bakaani.scss';

document.addEventListener('DOMContentLoaded', () => {
  const dependencies = [
    'components/app',
    'components/search',
    'containers/genre'
  ];

  const render = (Component, store) => {
    const mount = document.getElementById(Component.displayName);

    if (mount) {
      const props = JSON.parse(mount.dataset.props || '{}');
      ReactDOM.render(
        <AppContainer>
          <Provider store={store}>
            <Component {...props} />
          </Provider>
        </AppContainer>
      , mount);
    }
  }

  render(SearchForm, searchStore);
  render(AppComponent, appStore);
  render(GenrePage, genreStore);

  if (module.hot) {
    console.log('Webpack Hot Reload!');

    module.hot.accept(dependencies, () => {
      render(require('components/app').default, appStore);
      render(require('components/search').default, searchStore);
      render(require('containers/genre').default, genreStore);
    });
  }

  malicious();
});
