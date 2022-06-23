import {SIGN_IN, SIGN_UP} from '../types';

export default function (state = {}, action) {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        acuth: {
          email: action.payload.email || false,
          token: action.payload.token || false,
        },
      };
    case SIGN_UP:
      return {
        ...state,
        acuth: {
          email: action.payload.email || false,
          token: action.payload.token || false,
        },
      };
    default:
      return state;
  }
}
