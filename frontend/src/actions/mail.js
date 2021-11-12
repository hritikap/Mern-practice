import axios from 'axios';
import { filterReducer } from '../Filter/Filter';
import moment from 'moment';

export const openCompose = () => async (dispatch) => {
  dispatch({
    type: 'SET_COMPOSE',
    payload: 1,
  });
};

export const closeCompose = () => async (dispatch) => {
  dispatch({
    type: 'SET_COMPOSE',
    payload: 0,
  });
};
export const sendMail = (to, sub, body) => async (dispatch, getState) => {
  const { userData } = getState();
  const { userInfo } = userData;
  const time = moment().format('MMM Do YY ,h:mm');

  try {
    const { data } = await axios.post(
      '',
      { to, sub, body, time },
      {
        headers: {
          authorization: `Bearer ${userInfo.token}`,
        },
      },
    );

    dispatch({
      type: 'EMAIL_SENT',
    });
    dispatch({
      type: 'SET_COMPOSE',
      payload: 0,
    });
  } catch (e) {
    console.log(e.response);
    let message = e.response.statusText;
    if (e.response.status === 404) message = 'The user is not registered';
    dispatch({
      type: 'EMAIL_FAIL',
      payload: message,
    });
  }
};

export const FetchMail = () => async (dispatch, getState) => {
  dispatch({
    type: 'FETCH_MAIL_REQUEST',
  });
  const { userData } = getState();
  const { userInfo } = userData;

  try {
    let { data } = await axios.get('', {
      headers: {
        authorization: `Bearer ${userInfo.token}`,
      },
    });
    const newdata = filterReducer(data);

    dispatch({
      type: 'FETCH_MAIL_SUCCESS',
      payload: data,
    });
    localStorage.setItem('mailList', JSON.stringify(data));
  } catch (e) {
    dispatch({
      type: 'FETCH_MAIL_FAIL',
      payload: e,
    });
  }
};
export const FetchSendMail = () => async (dispatch, getState) => {
  dispatch({ type: 'FETCHING_SENT_MAIL' });

  const { userData } = getState();

  const { userInfo } = userData;

  try {
    let { data } = await axios.get('', {
      headers: {
        authorization: `Bearer ${userInfo.token}`,
      },
    });
    const newdata = filterReducer(data);

    dispatch({
      type: 'FETCH_SENTMAIL_SUCCESS',
      payload: data,
    });

    localStorage.setItem('sentmailList', JSON.stringify(data));
  } catch (e) {
    dispatch({
      type: 'FETCH_MAIL_FAIL',
      payload: e,
    });
  }
};
