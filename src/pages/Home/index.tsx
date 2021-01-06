import React, { useEffect, useState } from 'react';
import Track from '../../components/Track';
import { useKeyboardContext, changeComponent } from '../../context/KeyboardContext';
// import VideoCard from '../../components/VideoCard';

import * as S from './styles';

const Home: React.FC = () => {
  const { keyboard, dispatch }: any = useKeyboardContext();
  const [activePage, setActivePage] = useState(false);

  useEffect(() => {
    dispatch(changeComponent('menu'));
  }, []);

  useEffect(() => {
    if (keyboard.component === 'home') {
      setActivePage(true);
      controlHandler(keyboard.key);
    }
  }, [keyboard]);

  const controlHandler = (key: string) => {
    switch (key) {
      case 'ArrowLeft':
        dispatch(changeComponent('menu'));
        setActivePage(false);
        break;
      default:
        break;
    }
  };

  return (
    <S.Container active={activePage}>
      <S.PageTitle>Home</S.PageTitle>
      <Track />
      <Track />
      <Track />
    </S.Container>
  );
};
export default Home;
