import React from 'react';
import styled from 'styled-components';

const Inboxwrapper = styled.div`
  display: flex;

  align-items: center;
  padding: 20px;
  color: #818181;
  flex-direction: column;
`;

const Inbox = () => {
  return (
    <Inboxwrapper>
      <div>
        <h1>Inbox</h1>
      </div>
    </Inboxwrapper>
  );
};

export default Inbox;
