import { useContext } from 'react';
import { GlobalState } from '../../../GlobalState';

const Home = () => {
  const state = useContext(GlobalState);
  console.log(state);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
