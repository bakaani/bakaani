import { combineReducers } from 'redux';

import * as GenreConstants from 'constants/genre';

const genres = (state = [], action) => {
  switch (action.type) {
    case GenreConstants.GET_GENRES_LIST_SUCCESS:
      return action.payload.genres;
    case GenreConstants.GET_GENRES_LIST_FAILURE:
      return [];
    case GenreConstants.CREATE_GENRE_SUCCESS:
      return [...state, action.payload.genre];
    case GenreConstants.UPDATE_GENRE_SUCCESS:
      const newGenres = [...state];
      const payload = action.payload.genre;
      const index = state.findIndex((genre) => {
        return genre.id === payload.id
      });
      state.splice(index, 1);

      newGenres[index] = payload;
      return newGenres;
    default:
      return state;
  }
}

const loading = (state = false, action) => {
  switch (action.type) {
    case GenreConstants.CREATE_GENRE_SUCCESS:
    case GenreConstants.CREATE_GENRE_FAILURE:
    case GenreConstants.GET_GENRES_LIST_SUCCESS:
    case GenreConstants.GET_GENRES_LIST_FAILURE:
    case GenreConstants.UPDATE_GENRE_SUCCESS:
    case GenreConstants.UPDATE_GENRE_FAILURE:
      return false;
    case GenreConstants.CREATE_GENRE_REQUEST:
    case GenreConstants.UPDATE_GENRE_REQUEST:
    case GenreConstants.GET_GENRES_LIST_REQUEST:
      return true;
    default:
      return state;
  }
}

const errors = (state = [], action) => {
  switch (action.type) {
    case GenreConstants.CREATE_GENRE_REQUEST:
    case GenreConstants.CREATE_GENRE_SUCCESS:
    case GenreConstants.UPDATE_GENRE_REQUEST:
    case GenreConstants.UPDATE_GENRE_SUCCESS:
      return [];
    case GenreConstants.CREATE_GENRE_FAILURE:
    case GenreConstants.UPDATE_GENRE_FAILURE:
      return action.payload.errors;
    default:
      return state;
  }
}

const message = (state = null, action) => {
  switch (action.type) {
    case GenreConstants.CREATE_GENRE_SUCCESS:
    case GenreConstants.UPDATE_GENRE_SUCCESS:
      return action.payload.message;
    case GenreConstants.CREATE_GENRE_REQUEST:
    case GenreConstants.UPDATE_GENRE_REQUEST:
    case GenreConstants.CREATE_GENRE_FAILURE:
    case GenreConstants.UPDATE_GENRE_FAILURE:
      return null;
    default:
      return state;
  }
}

export default combineReducers({ genres, loading, errors, message });
