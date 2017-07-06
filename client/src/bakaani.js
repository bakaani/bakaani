import 'bootstrap';
import 'bootstrap-fileinput';

import ReactDOM from 'react-dom';
import React, { Component } from 'react';

import AppComponent from 'components/app';
import SearchForm from 'components/search';

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

  $('.file-image').fileinput({
    initialPreview: '<img src="https://blog.stylingandroid.com/wp-content/themes/lontano-pro/images/no-image-slide.png" />',
    showUpload: false,
    autoOrientImage: true,
    previewFileType: 'image',
    allowedFileTypes: ['image'],
    browseClass: 'btn btn-success',
    removeClass: 'btn btn-danger',
    removeIcon: '<i class="fa fa-trash"></i>',
    browseIcon: '<i class="fa fa-picture-o"></i>'
  });
});
