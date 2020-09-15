import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import {
  FETCH_STATIONS_ELEMENT,
  FETCH_STATIONS_ELEMENTS_FAILURE,
  FETCH_STATIONS_ELEMENTS_SUCCESS,
  FETCH_INFORMATION_ELEMENT,
  FETCH_INFORMATION_ELEMENTS_FAILURE,
  FETCH_INFORMATION_ELEMENTS_SUCCESS,
} from '../actions';

const defaultStateList: any = {
  error: {},
  isFetching: false,
  stations: new Object,
  infromation: new Object,
};

const stations = (state = defaultStateList, action: { type: any; data: any; error: any }) => {
  switch (action.type) {
    case FETCH_STATIONS_ELEMENT:
      return {...state, isFetching: false};
    case FETCH_STATIONS_ELEMENTS_SUCCESS:
      return {...state, isFetching: true, stations: action.data};
    case FETCH_STATIONS_ELEMENTS_FAILURE:
      return {...state, isFetching: false, error: action.error};
    default:
      return state;
  }
};

const infromation = (state = defaultStateList, action: { type: any; data: any; error: any }) => {
  switch (action.type) {
    case FETCH_INFORMATION_ELEMENT:
      return {...state, isFetching: false};
    case FETCH_INFORMATION_ELEMENTS_SUCCESS:
      return {...state, isFetching: true, infromation: action.data};
    case FETCH_INFORMATION_ELEMENTS_FAILURE:
      return {...state, isFetching: false, error: action.error};
    default:
      return state;
  }
};

const bikeApp = combineReducers({
  stations,
  infromation,
  routing: routerReducer,
});

export default bikeApp;
