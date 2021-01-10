import React, { createRef, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useKeyboardContext } from '../../context/KeyboardContext';
import { addFavorite, useFavoritesContext } from '../../context/FavoriteContext';

import { Container, OptionsBox, Button } from './styles';
import { api } from '../../services/api';
import { IVideoEntityReq } from '../../dtos/IVideoEntityReq';

const VideoPlayer: React.FC = () => {
  const urlParams = useLocation().search;
  const [videoId, setVideoId] = useState('');
  const [loading, setLoading] = useState(true);
  const { keyboard }: any = useKeyboardContext();
  const { favorites, dispatch }: any = useFavoritesContext();
  const [optionsBoxActive, setOptionsBoxActive] = useState(false);
  const [activeButton, setActiveButton] = useState(0);
  const history = useHistory();
  const [data, setData] = useState<IVideoEntityReq>();

  useEffect(() => {
    controlHandler(keyboard.key);
  }, [keyboard]);

  useEffect(() => {
    setVideoId(urlParams.substr(1));
    setLoading(false);
    setOptionsBoxActive(false);

    getData(urlParams.substr(1));
  }, [urlParams]);

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  const getData = async (id: string) => {
    const response = await api.get('/videos', {
      params: {
        id,
        part: 'snippet,statistics',
      },
    });

    setData(response.data.items[0]);
  };

  const controlHandler = (key: string) => {
    switch (key) {
      case 'Escape':
        if (!optionsBoxActive) {
          history.goBack();
        } else {
          setOptionsBoxActive(false);
        }
        break;
      case 'Enter':
        if (!optionsBoxActive) {
          setOptionsBoxActive(true);
        } else if (optionsBoxActive && activeButton === 0) {
          history.goBack();
        } else if (optionsBoxActive && activeButton === 1) {
          handleFavorite();
        }
        break;
      case 'ArrowLeft':
        if (optionsBoxActive) {
          setActiveButton(0);
        }
        break;
      case 'ArrowRight':
        if (optionsBoxActive) {
          setActiveButton(1);
        }
        break;
      default:
        break;
    }
  };

  const handleFavorite = () => {
    dispatch(addFavorite({
      id: videoId,
      channelTitle: data!.snippet.channelTitle,
      title: data!.snippet.title,
    }));
  };

  return (
    <Container>
      {
      loading ? <h1>Carregando...</h1>
        : <iframe title="yt-player" src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      }
      <OptionsBox active={optionsBoxActive}>
        <Button active={activeButton === 0}>Continuar</Button>
        <Button active={activeButton === 1}>Adicionar aos favoritos</Button>
      </OptionsBox>
    </Container>
  );
};

export default VideoPlayer;
