import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';

import Errors from 'components/errors';
import Message from 'components/message';
import * as GenreActions from 'actions/genre';

export class GenrePage extends Component {
  constructor(props) {
    super(props);
    this.state = { currentGenre: null, name };
    this.setName = this.setName.bind(this);
    this.loadGenre = this.loadGenre.bind(this);
    this.createGenre = this.createGenre.bind(this);
  }

  componentWillMount() {
    this.props.getGenres();
  }

  renderTable() {
    const { labels, genres } = this.props;

    return (
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>{labels.name}</th>
          </tr>
        </thead>
        <tbody>
          { this.renderRows(genres) }
        </tbody>
      </table>
    );
  }

  renderRows(genres) {
    return genres.map((genre) => (
      <tr className="pointer" key={genre.id}
        onClick={() => { this.loadGenre(genre) }}>
        <td>{genre.id}</td>
        <td>{genre.name}</td>
      </tr>
    ));
  }

  setName(event) {
    this.setState({ name: event.target.value });
  }

  loadGenre(genre) {
    this.setState({ currentGenre: genre, name: genre.name });
  }

  createGenre(event) {
    event.preventDefault();

    const name = this.refs.name.value;
    const { currentGenre } = this.state;

    if (currentGenre) {
      this.setState({ currentGenre: null, name: '' });
      this.props.updateGenre(currentGenre.id, { name });
    } else {
      this.setState({ name: '' });
      this.props.createGenre({ name });
    }
  }

  render() {
    const { name } = this.state;
    const { labels, errors, message } = this.props;

    return (
      <div className="row">
        <Errors messages={errors} />
        <Message message={message} />
        <div className="col col-sm-8">
          <div className="card">
            <div className="card-header">
              <h2 className="text-center">{labels.title}</h2>
            </div>
            <div className="card-block">
              { this.renderTable() }
            </div>
          </div>
        </div>
        <div className="col col-sm-4">
          <form onSubmit={this.createGenre}>
            <div className="card">
              <div className="card-header">
                <h2 className="text-center">{labels.new_btn}</h2>
              </div>
              <div className="card-block">
                <div className="row">
                  <div className="form-group col col-sm-8">
                    <input
                      ref="name"
                      type="text"
                      value={name}
                      placeholder="Name"
                      className="form-control"
                      onChange={this.setName} />
                  </div>
                  <div className="col col-sm-4 text-right">
                    <button className="btn btn-primary">Create</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const GenreContainer = connect(state => state, GenreActions)(GenrePage);

GenreContainer.displayName = 'GenrePage';
export default GenreContainer;
