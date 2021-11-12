import styled from 'styled-components';

export const Mailstyles = styled.section`
  flex: 1;
  background-color: whitesmoke;

  .mail__tools {
    display: flex;
    justify-content: space-between;
    background-color: white;
  }

  .mail__body {
    display: flex;
    flex-direction: column;
    margin: 30px;
    background-color: white;
    padding: 20px;
    height: 100vh;
    box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24);
  }
  .mail__title {
    margin: 30px 5px;
    display: flex;
    align-content: space-between;
  }
  .mail__title > p {
    color: grey;
  }
  .mail__content {
    display: flex;
    flex-direction: column;
  }
  .mail__content > .header {
    display: flex;
  }
`;
