import React from 'react';
import VideoCard from '../VideoCard';

import * as S from './styles';

const Track: React.FC = () => (
  <S.Container>
    <S.CategoryTitle>Recomendado</S.CategoryTitle>
    <S.Content>
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </S.Content>
  </S.Container>
);

export default Track;
