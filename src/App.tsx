import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import KeyboardHandle from './components/KeyboardHandle';
import Navigation from './components/Navigation';
import { FavoritesProvider } from './context/FavoriteContext';
import { KeyboardProvider } from './context/KeyboardContext';
import GlobalStyle from './global/globalStyle';
import VideoPlayer from './pages/VideoPlayer';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <FavoritesProvider>
      <KeyboardProvider>
        <KeyboardHandle />
        <BrowserRouter>
          <Routes />
          <Route path="/video" component={VideoPlayer} />
        </BrowserRouter>
      </KeyboardProvider>
    </FavoritesProvider>
  </>
);

export default App;
