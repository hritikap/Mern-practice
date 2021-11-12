import React from 'react';
import { Button, IconButton } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
// import SidebarOption from './SidebarOption.js';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import { openCompose } from '../../actions/mail.js';
import { sidebarStyles } from './sidebarstyles.js';

const Sidebar = () => {
  const userInfo = useSelector((state) => state.userData.userInfo);
  const mailList = useSelector((state) => state.mailList);
  const sentMailList = useSelector((state) => state.sentMailList);
  const dispatch = useDispatch();
  const setcompose = () => {
    dispatch(openCompose());
  };

  return (
    <sidebarStyles>
      <Button
        className='sidebar_compose '
        onclick={setcompose}
        startIcon={<AddIcon fontsize='large' />}
      >
        COMPOSE
      </Button>
    </sidebarStyles>
  );
};
export default Sidebar;
