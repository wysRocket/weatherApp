import {weatherAPI} from './../api/api';
import {reset} from 'redux-form';

const SET_COORDINATES = 'SET_COORDINATES';
const SET_WEATHER = 'SET_WEATHER';
const UPDATE_TEMPERATURE = 'UPDATE_TEMPERATURE';
const HANDLE_ERROR = 'HANDLE_ERROR';

let initialState = {
    error: '',
    coords: { },
    weather: { },
}
const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COORDINATES: {
            return {
                ...state,
                coords: action.coords }
        }
        case SET_WEATHER: {
            return {
                ...state,
                weather: action.payload }
        }
        case UPDATE_TEMPERATURE: {
            return {
                ...state, weather: {...state.weather, main:
                {...state.weather.main, temp: action.temp }}}
        }
        case HANDLE_ERROR: {
            return {
                ...state,
                error: action.error }
        }
        default: return state;
}}

export const setCoordinates = (coords) => ({ type: SET_COORDINATES, coords });
export const setWeather = (payload) => ({ type: SET_WEATHER, payload });
export const updateTemp = (temp) => ({ type: UPDATE_TEMPERATURE, temp });
export const handleError = (error) => ({ type: HANDLE_ERROR, error });

export const getWeather = (latt, long) => async (dispatch) => {
    let response = await weatherAPI.getLocalWeather(latt, long)
    dispatch(setWeather(response.data))
};

export const getParticularCityWeather = (cityName) => async (dispatch) => {
try { let response = await weatherAPI.getParticularCityWeather(cityName)
    dispatch(setWeather(response.data))
    dispatch(reset('city_name'))
    dispatch(handleError(''))
} catch (error) { 
    dispatch(handleError('There is no such city on this planet'))
    dispatch(reset('city_name'))
   }
};

export default weatherReducer;