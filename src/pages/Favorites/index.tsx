/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Track from '../../components/Track';
import { useFavoritesContext } from '../../context/FavoriteContext';
import { useKeyboardContext, changeComponent } from '../../context/KeyboardContext';
import { IVideo } from '../../dtos/IVideo';
import { IVideoCategory } from '../../dtos/IVideoCategory';
import { IVideoEntityReq } from '../../dtos/IVideoEntityReq';
import { api } from '../../services/mockapi';

import * as S from './styles';

const Favorites: React.FC = () => {
  const { keyboard, dispatch }: any = useKeyboardContext();
  const { favorites }: any = useFavoritesContext();
  const [activePage, setActivePage] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [trackLoading, setTrackLoading] = useState(true);
  const history = useHistory();

  const [videoCategories, setVideoCategories] = useState<IVideoCategory[]>([] as IVideoCategory[]);

  useEffect(() => {
    dispatch(changeComponent('menu'));
    getCategories();
  }, []);

  useEffect(() => {
    if (keyboard.component === 'favorites') {
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
        newActiveItem += 5 - 1 > newActiveItem ? 1 : 0;
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

  const getCategories = async () => {
    const tmpVideoCategories: IVideoCategory[] = [{ id: 'favorites', title: 'Favoritos', videos: [] }];

    setVideoCategories(tmpVideoCategories);
  };

  const handlePlay = (id:string) => {
    history.push(`/video/?${id}`);
  };

  return (
    <S.Container active={activePage} activeModule={activeItem > 0 ? activeItem : 0}>
      <S.PageTitle>HOME</S.PageTitle>
      {videoCategories.map((item: IVideoCategory, key) => (
        <Track
          key={item.id}
          active={key === activeItem}
          title={item.title}
          id={item.id}
          item={item}
          handleOut={() => { handleOut(); }}
          handlePlay={(id: string) => { handlePlay(id); }}
        />
      ))}
    </S.Container>
  );
};
export default Favorites;
