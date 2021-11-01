import { render } from 'react-dom';
import App from './App';
import { ContextProvider } from './context/Context';

const root = document.getElementById('root');
render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  root,
);
