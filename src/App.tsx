import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import GlobalStyle from './global/globalStyle';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Navigation />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </>
);

export default App;
