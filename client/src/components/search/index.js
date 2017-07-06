import React, { Component } from 'react';

export default class SearchForm extends Component {
  static displayName = 'SearchForm';

  constructor(props) {
    super(props);
    this.state = { isActive: false };
    this.setIsActive = this.setIsActive.bind(this);
  }

  setIsActive(isActive) {
    this.setState({ isActive });
  }

  render() {
    const { placeholder } = this.props;
    const isActiveClass = this.state.isActive ? 'active' : '';

    return (
      <form className={`search form-inline my-2 my-lg-0 rounded ${isActiveClass}`}>
        <input
          type="text"
          className="form-control mr-sm-2"
          placeholder={placeholder}
          onFocus={() => { this.setIsActive(true) }}
          onBlur={() => { this.setIsActive(false) }} />

        <button className="pointer btn my-2 my-sm-0" type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
    );
  }
}
