import {GET_DIARIES} from '../types';
import {database} from '../../utils/misc';

export function getDiaries(User) {
  return dispatch => {
    const url = `diary/${User.auth.userId}`;
    database.ref(url).on('value', dataSnapShot => {
      dispatch({
        type: GET_DIARIES,
        payload: dataSnapShot.val().filter(item => item !== null),
      });
    });
  };
}
