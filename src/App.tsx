import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './global/globalStyle';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </>
);

export default App;
