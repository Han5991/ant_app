import {GET_DIARIES} from '../types';
import axios from 'axios';

export function getDiaries() {
  const request = axios({
    method: 'GET',
    url: 'https://superjoin-admin-test-default-rtdb.asia-southeast1.firebasedatabase.app/diary.json',
  })
    .then(res => {
      const diaryDate = [];
      for (const key in res.data) {
        if (res.data[key]) {
          diaryDate.push({
            ...res.data[key],
          });
        }
      }
      return diaryDate;
    })
    .catch(err => {
      console.log('err ', err);
      return false;
    });

  return {
    type: GET_DIARIES,
    payload: request,
  };
}
