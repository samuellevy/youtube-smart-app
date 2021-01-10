import React from 'react';
import { IVideo } from '../../dtos/IVideo';

import * as S from './styles';

interface IVideoCardComponent {
  data: IVideo;
  active?: boolean;
  position: number;
  activeItem: number;
}

interface IVideoCardItem {
  title: string;
  author: string;
  views: string;
  publishDate: string;
  active?: boolean;
}

const VideoCard: React.FC<IVideoCardComponent> = ({
  data, active,
  position, activeItem,
}: IVideoCardComponent) => (
  <S.Container active={active} position={position} activeItem={activeItem}>
    <S.ThumbBox active={active}>
      <S.ThumbImage src={data.thumbnail.medium.url} alt="" />
    </S.ThumbBox>
    <S.Title>{data.title}</S.Title>
    <S.Author>{data.channelTitle}</S.Author>
    <S.Footer>
      <S.Info>
        {`${data.viewCount} views • ${data.publishedAt}`}
      </S.Info>
    </S.Footer>
  </S.Container>
);

export default VideoCard;
