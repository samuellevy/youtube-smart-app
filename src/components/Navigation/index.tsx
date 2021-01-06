import React, { useState } from 'react';

import * as S from './styles';
import Icon from '../Icon';

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

  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <S.Container>
      <S.Header>
        <S.Avatar />
        <span>Entrar</span>
      </S.Header>
      {items.map((item) => (
        <S.Item key={item.slug} selected={false}>
          <Icon name={item.slug} />
          <span>{item.title}</span>
        </S.Item>
      ))}
    </S.Container>
  );
};

export default Navigation;
