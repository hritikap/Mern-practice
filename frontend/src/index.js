import { render } from 'react-dom';
import App from './App';
import { ContextProvider } from './context/Context';
import { DataProvider } from './GlobalState';

const root = document.getElementById('root');
render(
  <DataProvider>
    <App />
  </DataProvider>,
  root,
);
