import {defaultActionCreator} from "./actionCreator";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const loginRequest = defaultActionCreator(LOGIN_REQUEST, 'data');