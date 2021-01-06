import React, { useEffect } from 'react';
import Track from '../../components/Track';
import { useKeyboardContext, changeComponent } from '../../context/KeyboardContext';
// import VideoCard from '../../components/VideoCard';

import * as S from './styles';

const Home: React.FC = () => {
  const { keyboard, dispatch }: any = useKeyboardContext();

  useEffect(() => {
    console.log('home');
    dispatch(changeComponent('menu'));
  }, []);

  return (
    <S.Container>
      <S.PageTitle>Home</S.PageTitle>
      <Track />
      <Track />
      <Track />
    </S.Container>
  );
};
export default Home;
