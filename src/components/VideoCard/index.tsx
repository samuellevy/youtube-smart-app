import React from 'react';

import * as S from './styles';

interface IVideoCardComponent {
  data: IVideoCardItem;
  active?: boolean;
}

interface IVideoCardItem {
  title: string;
  author: string;
  views: string;
  publishDate: string;
  active?: boolean;
}

const VideoCard: React.FC<IVideoCardComponent> = ({ data, active }: IVideoCardComponent) => (
  <S.Container>
    <S.ThumbBox active={active}>
      <S.ThumbImage src="https://i.ytimg.com/vi/vJJX5gmP7oA/mqdefault.jpg" alt="" />
    </S.ThumbBox>
    <S.Title>{data.title}</S.Title>
    <S.Author>{data.author}</S.Author>
    <S.Footer>
      <S.Info>
        {`${data.views} views • ${data.publishDate}`}
      </S.Info>
    </S.Footer>
  </S.Container>
);

export default VideoCard;
