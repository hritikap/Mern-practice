import React from 'react';
import { useSelector } from 'react-redux';
import { IconButton } from '@material-ui/core';
// import {Link} from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import EmailIcon from '@material-ui/icons/Email';
import { Mailstyles } from './Mailstyles';

const Mail = ({ props }) => {
  const redirect = props.location.search
    ? props.location.search.split('?')[1]
    : '/';
  const userInfo = useSelector((state) => state.userData.userInfo);
  const mailList = useSelector((state) => state.mailList);
  const sendList = useSelector((state) => state.sentMailList);

  let list = redirect === 'user' ? mailList : sendList;

  let curMail = list.find((mail) => {
    return mail._id === props.match.params.id;
  });

  return (
    <Mailstyles>
      <div className='mail_icons'>
        <IconButton
          onClick={() => {
            props.history.push(`/${redirect}`);
          }}
        >
          <ArrowBackIcon />
        </IconButton>

        <IconButton>
          <EmailIcon />
        </IconButton>
      </div>

      <div className='mail__body'>
        <div className='mail__title'>
          <h2>{curMail.subject}</h2>
          <p>({curMail.from})</p>
        </div>
        <div className='mail__content'>
          <p>{curMail.body}</p>
        </div>
      </div>
    </Mailstyles>
  );
};
export default Mail;
