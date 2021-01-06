import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';
import * as S from './styles';
import Icon from '../Icon';
import { useKeyboardContext, changeComponent } from '../../context/KeyboardContext';

const Navigation: React.FC = () => {
  const [items] = useState([
    {
      id: 1,
      slug: 'search',
      title: 'Busca',
    },
    {
      id: 2,
      slug: 'home',
      title: 'Início',
    },
    {
      id: 3,
      slug: 'favorites',
      title: 'Favoritos',
    },
  ]);

  const [activeItem, setActiveItem] = useState(0);
  const [activeMenu, setActiveMenu] = useState(false);

  const { keyboard, dispatch }: any = useKeyboardContext();
  const history = useHistory();

  useEffect(() => {
    if (keyboard.component === 'menu') {
      setActiveMenu(true);
      console.log(keyboard);
      controlHandler(keyboard.key);
      history.push(`/${items[activeItem].slug}`);
    }
  }, [keyboard]);

  const controlHandler = (key: string) => {
    let newActiveItem = activeItem;
    switch (key) {
      case 'ArrowDown':
        newActiveItem += items.length - 1 > newActiveItem ? 1 : 0;
        break;
      case 'ArrowUp':
        newActiveItem -= newActiveItem === 0 ? 0 : 1;
        break;
      case 'ArrowRight':
        dispatch(changeComponent(items[newActiveItem].slug));
        setActiveMenu(false);
        break;
      default:
        break;
    }
    setActiveItem(newActiveItem);
  };

  return (
    <S.Container active={activeMenu}>
      <S.Header>
        <S.Avatar />
        <span>Entrar</span>
      </S.Header>
      {items.map((item, key) => (
        <S.Item key={item.slug} selected={activeItem === key} activeMenu={activeMenu}>
          <Icon name={item.slug} />
          <span>{item.title}</span>
        </S.Item>
      ))}
    </S.Container>
  );
};

export default Navigation;
