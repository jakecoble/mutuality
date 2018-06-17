import {
  USER_REGISTER,
  USER_LOGIN,
  USER_LOGOUT
} from './actionTypes';

import Api from '../api';

export function create (firstName, lastName, email, password) {
  return {
    type: USER_REGISTER,
    promise: Api.auth.create(firstName, lastName, email, password)
  };
}

export function login (email, password) {
  return {
    type: USER_LOGIN,
    promise: Api.auth.login(email, password)
  };
}

export function logout () {
  return {
    type: USER_LOGOUT
  };
}
