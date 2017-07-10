import React, { Component } from 'react';

export default class Errors extends Component {
  componentDidUpdate() {
    if (!_.isEmpty(this.props.messages)) {
      $('.notify').slideDown(500).delay(5000).slideUp(300);
    }
  }

  render() {
    const { messages } = this.props;
    if (_.isEmpty(messages)) {
      return null;
    }

    return (
      <div className="notify">
        {
          messages.map((msg, i) => (
            <div className="alert alert-danger alert-dismissible fade show" role="atert" key={i}>
              <button className="close" data-dismiss="alert">
                <span>&times;</span>
              </button>
              { msg }
            </div>
          ))
        }
      </div>
    );
  }
}
