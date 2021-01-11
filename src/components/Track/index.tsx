import React, { useEffect, useState } from 'react';
import { useFavoritesContext } from '../../context/FavoriteContext';
import { useKeyboardContext } from '../../context/KeyboardContext';
import { IVideo } from '../../dtos/IVideo';
import { IVideoCategory } from '../../dtos/IVideoCategory';
import { IVideoEntityReq } from '../../dtos/IVideoEntityReq';
import { api } from '../../services/api';
import VideoCard from '../VideoCard';

import * as S from './styles';

interface ITrackComponent {
  active?:boolean;
  title?:string;
  id?:string;
  handleOut(): void;
  item: IVideoCategory;
  handlePlay(id: string): void;
  query?: string;
}

interface IVideoCardItem {
  title: string;
  author: string;
  views: string;
  publishDate: string;
  active?: boolean;
}

const Track: React.FC<ITrackComponent> = ({
  active, title, id, handleOut, item, handlePlay, query = '',
}:ITrackComponent) => {
  const [activeModule, setActiveModule] = useState(false);
  const [initial, setInitial] = useState(true);
  const [activeItem, setActiveItem] = useState(0);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<IVideo[]>([] as IVideo[]);

  const { keyboard, dispatch }: any = useKeyboardContext();
  const { favorites }: any = useFavoritesContext();

  useEffect(() => {
    if (active === false) {
      setActiveItem(-1);
    } else {
      setActiveItem(0);
    }
  }, [active]);

  useEffect(() => {
    if (keyboard.component === 'results') {
      setActiveItem(0);
    }
    if (keyboard.component === 'home' || keyboard.component === 'favorites' || keyboard.component === 'results') {
      if (active && keyboard.key !== '') {
        console.log(keyboard.key);
        controlHandler(keyboard.key);
      }
    }
  }, [keyboard]);

  useEffect(() => {
    if (id === 'query') {
      getQueryData(query);
    } else {
      getData(id!);
    }
  }, [id]);

  useEffect(() => {
    if (data.length > 0) {
      setLoading(false);
    }
  }, [data]);

  const getData = async (categoryId: string) => {
    let ids = '';
    favorites.favorites.map((favItem:any) => {
      ids += `${favItem.id},`;

      return true;
    });

    ids = ids.substr(0, ids.length - 1);
    console.log(ids);
    const params = {
      chart: 'mostPopular',
      videoCategoryId: categoryId,
      part: 'snippet,statistics',
    };

    const favParams = {
      id: ids,
      part: 'snippet,statistics',
    };

    const response = await api.get('/videos', {
      params: categoryId === 'favorites' ? favParams : params,
    });

    const { items } = response.data;
    const tmpItems: IVideo[] = [];

    items.map((videoItem: any) => {
      tmpItems.push({
        id: videoItem.id,
        channelId: videoItem.snippet.channelId,
        channelTitle: videoItem.snippet.channelTitle,
        description: videoItem.snippet.description,
        publishedAt: videoItem.snippet.publishedAt,
        thumbnail: videoItem.snippet.thumbnails,
        title: videoItem.snippet.title,
        viewCount: videoItem.statistics.viewCount,
      });

      return true;
    });

    setData(tmpItems);
    console.log(tmpItems);
  };

  const getQueryData = async (q: string) => {
    const ids = '';
    setActiveItem(0);

    const params = {
      type: 'video',
      part: 'snippet',
      q,
    };

    const response = await api.get('/search', {
      params,
    });

    const { items } = response.data;
    const tmpItems: IVideo[] = [];

    items.map((videoItem: any) => {
      tmpItems.push({
        id: videoItem.id,
        channelId: videoItem.snippet.channelId,
        channelTitle: videoItem.snippet.channelTitle,
        description: videoItem.snippet.description,
        publishedAt: videoItem.snippet.publishedAt,
        thumbnail: videoItem.snippet.thumbnails,
        title: videoItem.snippet.title,
        viewCount: 0,
      });

      return true;
    });

    setData(tmpItems);
    console.log(tmpItems);
  };

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
        if (keyboard.component !== 'results') {
          handlePlay(data[activeItem].id);
        }
        break;
      default:
        break;
    }
    setActiveItem(newActiveItem);
    console.log(newActiveItem);
    if (newActiveItem === -1) {
      handleOut();
    }
  };

  return (
    <S.Container>
      {loading ? <h1>Carregando...</h1>
        : (
          <>
            <S.CategoryTitle>{item.title}</S.CategoryTitle>
            <S.Content>
              {data.map((videoCardItem: IVideo, key: number) => (
                <VideoCard
                  position={key}
                  activeItem={activeItem}
                  key={videoCardItem.id}
                  data={videoCardItem}
                  active={activeItem === key}
                />
              ))}
            </S.Content>
          </>
        )}
    </S.Container>
  );
};

export default Track;
