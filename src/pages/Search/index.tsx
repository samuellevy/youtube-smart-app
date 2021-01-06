import React, { useEffect, useState } from 'react';
import Track from '../../components/Track';
import { useKeyboardContext, changeComponent } from '../../context/KeyboardContext';
// import VideoCard from '../../components/VideoCard';

import * as S from './styles';

const Search: React.FC = () => {
  const { keyboard, dispatch }: any = useKeyboardContext();
  const [activePage, setActivePage] = useState(false);

  useEffect(() => {
    dispatch(changeComponent('menu'));
  }, []);

  useEffect(() => {
    if (keyboard.component === 'search') {
      setActivePage(true);
    }
  }, [keyboard]);

  return (
    <S.Container active={activePage}>
      <S.PageTitle>Search</S.PageTitle>
    </S.Container>
  );
};
export default Search;
