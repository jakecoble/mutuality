import { handle } from 'redux-pack';

import { USER_REGISTER, USER_LOGIN } from '../actions/actionTypes';

const initialState = {
  authenticated: false,
  authenticating: false,
  firstName: '',
  lastName: ''
};

export default function user (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
  case USER_LOGIN:
    return handle(state, action, {
      start: prevState => ({
        ...prevState,
        authenticating: true
      }),

      finish: prevState => ({
        ...prevState,
        authenticating: false
      }),

      success: prevState => ({
        ...prevState,
        authenticated: true,
        firstName: payload.firstName,
        lastName: payload.lastName
      })
    });
  default:
    return state;
  }
}
