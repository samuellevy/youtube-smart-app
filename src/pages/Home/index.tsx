import React, { useEffect, useState } from 'react';
import Track from '../../components/Track';
import { useKeyboardContext, changeComponent } from '../../context/KeyboardContext';
// import VideoCard from '../../components/VideoCard';

import * as S from './styles';

const Home: React.FC = () => {
  const { keyboard, dispatch }: any = useKeyboardContext();
  const [activePage, setActivePage] = useState(false);
  const [activeItem, setActiveItem] = useState(0);

  const tracks = [
    { title: 'Música', id: 10 },
    { title: 'Gaming', id: 20 },
  ];

  useEffect(() => {
    dispatch(changeComponent('menu'));
  }, []);

  useEffect(() => {
    if (keyboard.component === 'home') {
      setActivePage(true);
      controlHandler(keyboard.key);
    }
    if (keyboard.component === 'menu') {
      setActivePage(false);
    }
  }, [keyboard]);

  const controlHandler = (key: string) => {
    let newActiveItem = activeItem;
    switch (key) {
      case 'ArrowLeft':
        break;
      case 'ArrowDown':
        newActiveItem += tracks.length - 1 > newActiveItem ? 1 : 0;
        break;
      case 'ArrowUp':
        newActiveItem -= newActiveItem === 0 ? 0 : 1;
        break;
      default:
        break;
    }
    setActiveItem(newActiveItem);
  };

  const handleOut = () => {
    dispatch(changeComponent('menu'));
  };

  return (
    <S.Container active={activePage} activeModule={activeItem > 0 ? activeItem : 0}>
      <S.PageTitle>HOME</S.PageTitle>
      {tracks.map((item, key) => (
        <Track
          active={key === activeItem}
          title={item.title}
          id={item.id}
          handleOut={() => { handleOut(); }}
        />
      ))}
    </S.Container>
  );
};
export default Home;
