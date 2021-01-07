import React, { useEffect, useState } from 'react';
import { useKeyboardContext } from '../../context/KeyboardContext';
import VideoCard from '../VideoCard';

import * as S from './styles';

interface ITrackComponent {
  active?:boolean;
  title?:string;
  id?:number;
  handleOut(): void;
}

interface IVideoCardItem {
  title: string;
  author: string;
  views: string;
  publishDate: string;
  active?: boolean;
}

const Track: React.FC<ITrackComponent> = ({
  active, title, id, handleOut,
}:ITrackComponent) => {
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
    if (keyboard.component === 'home' && active && keyboard.key !== '') {
      controlHandler(keyboard.key);
    }
  }, [keyboard]);

  const controlHandler = (key: string) => {
    let newActiveItem = activeItem;
    switch (key) {
      case 'ArrowLeft':
        newActiveItem -= newActiveItem === -1 ? 0 : 1;
        break;
      case 'ArrowRight':
        newActiveItem += data.length - 1 > newActiveItem ? 1 : 0;
        break;
      case 'Enter':
        alert(data[activeItem].title);
        break;
      default:
        break;
    }
    setActiveItem(newActiveItem);
    if (newActiveItem === -1) {
      handleOut();
    }
  };

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
