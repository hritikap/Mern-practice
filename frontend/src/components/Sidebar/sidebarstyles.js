import styled from 'styled-components';

export const sidebarStyles = styled.section`
  flex: 0.3;
  max-width: 300px;
  padding-right: 20px;

  .sidebar_compose {
    margin-top: 15px !important;
    margin-left: 10px !important;
    margin-bottom: 15px !important;
    text-transform: capitalize !important;
    color: gray;
    padding: 15px !important;
    border-radius: 30px !important;
    box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.75);
  }

  .sidebar_footer {
    display: flex;
    flex-direction: column;
  }
  .sidebar_features {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  @media only screen and (max-width: 600px) {
    .sidebar {
      flex: 3;
      padding-right: 20px;
    }
  }
`;
