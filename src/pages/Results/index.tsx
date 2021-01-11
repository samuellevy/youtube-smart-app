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

const Results: React.FC = () => {
  const { keyboard, dispatch }: any = useKeyboardContext();
  const { favorites }: any = useFavoritesContext();
  const [activePage, setActivePage] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [trackLoading, setTrackLoading] = useState(true);
  const history = useHistory();

  const [resultData, setResultData] = useState<IVideo[]>([] as IVideo[]);

  const [videoCategories, setVideoCategories] = useState<IVideoCategory[]>([] as IVideoCategory[]);

  useEffect(() => {
    dispatch(changeComponent('results'));
    getCategories();
    // // getDataSearch();
    // setActiveItem(0);
    setActivePage(true);
  }, []);

  useEffect(() => {
    if (keyboard.component === 'menu') {
      setActivePage(false);
    }
  }, [keyboard]);

  const handleOut = () => {
    dispatch(changeComponent('menu'));
  };

  const getCategories = async () => {
    const tmpVideoCategories: IVideoCategory[] = [
      { id: 'query', title: 'Pesquisa', videos: [] }];

    setVideoCategories(tmpVideoCategories);
  };

  const handlePlay = (id:string) => {
    history.push(`/video/?${id}`);
  };

  return (
    <S.Container active={activePage} activeModule={activeItem > 0 ? activeItem : 0}>
      {videoCategories.map((item: IVideoCategory, key) => (
        <Track
          key={item.id}
          active={key === activeItem}
          title={item.title}
          id={item.id}
          item={item}
          handleOut={() => { handleOut(); }}
          handlePlay={(id: string) => { handlePlay(id); }}
          // directData={resultData}
          query="iza"
        />
      ))}
    </S.Container>
  );
};
export default Results;
