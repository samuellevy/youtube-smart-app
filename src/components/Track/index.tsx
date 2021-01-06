import React, { useEffect, useState } from 'react';
import { useKeyboardContext } from '../../context/KeyboardContext';
import VideoCard from '../VideoCard';

import * as S from './styles';

interface ITrackComponent {
  active?:boolean;
  title?:string;
  id?:number;
}

interface IVideoCardItem {
  title: string;
  author: string;
  views: string;
  publishDate: string;
  active?: boolean;
}

const Track: React.FC<ITrackComponent> = ({ active, title, id }:ITrackComponent) => {
  const data = [
    {
      title: 'Harry Potter e a Pedra Filosofal',
      author: 'Warner Bros.',
      views: '1.3M',
      publishDate: '1 year ago',
    },
    {
      title: 'Harry Potter e a Câmara Secreta',
      author: 'Warner Bros.',
      views: '2.3M',
      publishDate: '2 years ago',
    },
  ];

  const [activeModule, setActiveModule] = useState(false);
  const [activeItem, setActiveItem] = useState(0);

  const { keyboard, dispatch }: any = useKeyboardContext();

  useEffect(() => {
    if (active === false) {
      setActiveItem(-1);
    } else {
      setActiveItem(0);
    }
  }, [active]);

  useEffect(() => {
    if (keyboard.component === 'home') {
      console.log(keyboard);
    }
  }, [keyboard]);

  return (
    <S.Container>
      <S.CategoryTitle>{title}</S.CategoryTitle>
      <S.Content>
        {data.map((item, key) => (
          <VideoCard data={item} active={activeItem === key} />
        ))}
      </S.Content>
    </S.Container>
  );
};

export default Track;
