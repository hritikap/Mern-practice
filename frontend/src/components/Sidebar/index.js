import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Add, Inbox, Send } from '@material-ui/icons';

const Wrapper = styled.div`
  width: 200px;

  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: 0.3;
  background-color: blue;

  .top {
    margin-top: 50px;
    button {
      margin-top: 15px;
      margin-left: 10px;
      margin-bottom: 15px;
      text-transform: capitalize;
      color: gray;
      padding: 15px;
      border-radius: 30px;
      box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.75);
      font-size: large;
      font-weight: bolder;
    }
  }

  .bottom {
    margin-top: 20px;
    ul {
      display: flex;
      list-style: none;
      flex-direction: column;
      li {
        font-size: 1.2rem;
        padding: 10px;
        text-transform: capitalize;
        width: 200px;
        border-left: none;
        border-right: none;
        font-weight: bolder;
        a {
          color: black;
          box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.75);
        }
        :hover {
          border-radius: 10px;
          background-color: #fff;
          a {
            color: red;
          }
        }
      }
    }
  }
`;

const sideList = [
  {
    id: 1,
    name: `email-spam-detector`,
  },
  {
    id: 2,
    name: 'inbox',
    icon: { Inbox },
  },
  {
    id: 3,
    name: 'sent-mails',
    icon: { Send },
  },
];

const link = sideList.map((link) => {
  return (
    <li key={link.id}>
      <Link to={`/${link.name}`}>{link.name}</Link>
    </li>
  );
});

const Sidebar = () => {
  return (
    <Wrapper>
      <div className='top'>
        <button>
          <Add />
          compose
        </button>
      </div>
      <div className='bottom'>
        <ul>{link}</ul>
      </div>
    </Wrapper>
  );
};

export default Sidebar;
