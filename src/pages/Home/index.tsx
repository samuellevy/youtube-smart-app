/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Track from '../../components/Track';
import { useKeyboardContext, changeComponent } from '../../context/KeyboardContext';
import { IVideo } from '../../dtos/IVideo';
import { IVideoCategory } from '../../dtos/IVideoCategory';
import { IVideoEntityReq } from '../../dtos/IVideoEntityReq';
import { api } from '../../services/mockapi';

import * as S from './styles';

const Home: React.FC = () => {
  const { keyboard, dispatch }: any = useKeyboardContext();
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
    const response = await api.get('/videoCategories', {
      params: {
        regionCode: 'BR',
      },
    });

    const tmpVideoCategories: IVideoCategory[] = [];

    // eslint-disable-next-line array-callback-return
    response.data.items.filter((x:any, key: number) => key < 5 && x).map((item: any):void => {
      tmpVideoCategories.push({ id: item.id, title: item.snippet.title, videos: [] });
    });

    setVideoCategories(tmpVideoCategories);
  };

  const handlePlay = (id:string) => {
    history.push(`/video/?${id}`);
  };

  return (
    <S.Container data-testid="home" active={activePage} activeModule={activeItem > 0 ? activeItem : 0}>
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
export default Home;
