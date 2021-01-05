import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import KeyboardHandle from './components/KeyboardHandle';
import Navigation from './components/Navigation';
import { KeyboardProvider } from './context/KeyboardContext';
import GlobalStyle from './global/globalStyle';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <KeyboardProvider>
      <KeyboardHandle />
      <Navigation />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </KeyboardProvider>
  </>
);

export default App;
