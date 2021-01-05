import React from 'react';

import * as S from './styles';

const VideoCard: React.FC = () => (
  <S.Container>
    <S.ThumbBox>
      <S.ThumbImage src="https://i.ytimg.com/vi/vJJX5gmP7oA/mqdefault.jpg" alt="" />
    </S.ThumbBox>
    <S.Title>Harry Potter e a Pedra Filosofal</S.Title>
    <S.Author>Warner Bros.</S.Author>
    <S.Footer>
      <S.Info>3.3M views • 3 years ago</S.Info>
    </S.Footer>
  </S.Container>
);

export default VideoCard;
