import { 
  URL_PUNK,
  URL_STATION_STATUS_NAME,
  URL_STATION_INFORMATION_NAME,
  EXTENSION,
} from '../const';

export const FETCH_STATIONS_ELEMENT = 'FETCH_STATIONS_ELEMENT';
export const FETCH_STATIONS_ELEMENTS_FAILURE = 'FETCH_STATIONS_ELEMENTS_FAILURE';
export const FETCH_STATIONS_ELEMENTS_SUCCESS = 'FETCH_STATIONS_ELEMENTS_SUCCESS';

export const FETCH_INFORMATION_ELEMENT = 'FETCH_INFORMATION_ELEMENT';
export const FETCH_INFORMATION_ELEMENTS_FAILURE = 'FETCH_INFORMATION_ELEMENTS_FAILURE';
export const FETCH_INFORMATION_ELEMENTS_SUCCESS = 'FETCH_INFORMATION_ELEMENTS_SUCCESS';

function fetchStationsElement() {
  return {
    type: FETCH_STATIONS_ELEMENT,
  };
}

function fetchInformationElement() {
  return {
    type: FETCH_STATIONS_ELEMENT,
  };
}

function fetchStationsElementsSuccess(data: any) {
  return {
    data,
    type: FETCH_STATIONS_ELEMENTS_SUCCESS,
  };
}

function fetchInformationElementsSuccess(data: any) {
  return {
    data,
    type: FETCH_INFORMATION_ELEMENTS_SUCCESS,
  };
}

function fetchStationsElementsFail(error: any) {
  return {
    error,
    type: FETCH_STATIONS_ELEMENTS_FAILURE,
  };
}

function fetchInformationElementsFail(error: any) {
  return {
    error,
    type: FETCH_INFORMATION_ELEMENTS_FAILURE,
  };
}

/* tslint:disable */
export function fetchStationsElements() {
  let url: RequestInfo;
  url = URL_PUNK;

  return function(dispatch: { (arg0: { type: string; }): void; (arg0: (dispatch: { (arg0: { type: string; }): void; (arg0: { data: any; type: string; }): void; (arg0: { error: any; type: string; }): void; }) => void): void; (arg0: { error: any; type: string; }): void; }){
    dispatch(fetchStationsElement());

    fetch(`${url}/${URL_STATION_STATUS_NAME}${EXTENSION}`)
    .then(response => response.json())
    .then(data => dispatch(fetchStationsElementsSuccess(data)))
    .catch(error => dispatch(fetchStationsElementsFail(error)))
  }
}

export function fetchInformationElements() {
  let url: RequestInfo;
  url = URL_PUNK;

  return function(dispatch: { (arg0: { type: string; }): void; (arg0: (dispatch: { (arg0: { type: string; }): void; (arg0: { data: any; type: string; }): void; (arg0: { error: any; type: string; }): void; }) => void): void; (arg0: { error: any; type: string; }): void; }){
    dispatch(fetchInformationElement());

    fetch(`${url}/${URL_STATION_INFORMATION_NAME}${EXTENSION}`)
    .then(response => response.json())
    .then(data => dispatch(fetchInformationElementsSuccess(data)))
    .catch(error => dispatch(fetchInformationElementsFail(error)))
  }
}
