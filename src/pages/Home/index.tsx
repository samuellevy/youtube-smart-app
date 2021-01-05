import React from 'react';
import Navigation from '../../components/Navigation';
import Track from '../../components/Track';
import VideoCard from '../../components/VideoCard';

import * as S from './styles';

const Home: React.FC = () => {
  const data = [];
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
