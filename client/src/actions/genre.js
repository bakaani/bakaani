import * as GenreConstants from 'constants/genre';

export const getGenres = () => dispatch => {
  dispatch({ type: GenreConstants.GET_GENRES_LIST_REQUEST });
  return $.ajax({
    method: 'GET',
    dataType: 'json',
    url: '/admin/genres.json',
    success: (res) => {
      dispatch({ type: GenreConstants.GET_GENRES_LIST_SUCCESS, payload: res });
    },
    error: (xhr) => {
      dispatch({ type: GenreConstants.GET_GENRES_LIST_FAILURE });
    }
  });
}

export const createGenre = (genre) => dispatch => {
  dispatch({ type: GenreConstants.CREATE_GENRE_REQUEST });
  return $.ajax({
    method: 'POST',
    dataType: 'json',
    data: { genre },
    url: '/admin/genres.json',
    success: (res) => {
      dispatch({ type: GenreConstants.CREATE_GENRE_SUCCESS, payload: res });
    },
    error: (xhr) => {
      dispatch({ type: GenreConstants.CREATE_GENRE_FAILURE, payload: xhr.responseJSON });
    }
  });
}

export const updateGenre = (id, genre) => dispatch => {
  dispatch({ type: GenreConstants.UPDATE_GENRE_REQUEST });
  return $.ajax({
    method: 'PUT',
    dataType: 'json',
    data: { genre },
    url: `/admin/genres/${id}.json`,
    success: (res) => {
      dispatch({ type: GenreConstants.UPDATE_GENRE_SUCCESS, payload: res });
    },
    error: (xhr) => {
      dispatch({ type: GenreConstants.UPDATE_GENRE_FAILURE, payload: xhr.responseJSON });
    }
  });
}

export const clearMessage = () => {
  return { type: GenreConstants.CLEAR_MESSAAGE }
}
