import React, { Component } from 'react';

export default class Message extends Component {
  componentDidUpdate() {
    if (this.props.message) {
      $('.notify').slideDown(500).delay(5000).slideUp(300);
    }
  }

  render() {
    const { message } = this.props;
    if (!message) return null;

    return (
      <div className="notify">
        <div className="alert alert-success alert-dismissible fade show" role="atert">
          <button className="close" data-dismiss="alert">
            <span>&times;</span>
          </button>
          { message }
        </div>
      </div>
    );
  }
}
