import Axios from 'axios';
import {SIGNUP, SIGNIN} from '../../utils/misc';
import {SIGN_IN, SIGN_UP} from '../types';

export function signIn(data) {
  const request = Axios({
    method: 'POST',
    url: SIGNIN,
    data: {
      email: data.email,
      password: data.password,
      returnSecureToken: true,
    },
    header: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(err => {
      alert('에러 발생');
      return false;
    });

  return {
    type: SIGN_IN,
    payload: request,
  };
}

export function signUp(data) {
  const request = Axios({
    method: 'POST',
    url: SIGNUP,
    data: {
      email: data.email,
      password: data.password,
      returnSecureToken: true,
    },
    header: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log('err', err);
      alert('에러 발생');
      return false;
    });
  console.log('requset', request);
  return {
    type: SIGN_UP,
    payload: request,
  };
}
