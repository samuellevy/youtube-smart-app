import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Track from '../../components/Track';
import VirtualKeyboard from '../../components/VirtualKeyboard';
import { useKeyboardContext, changeComponent } from '../../context/KeyboardContext';
// import VideoCard from '../../components/VideoCard';

import * as S from './styles';

const Search: React.FC = () => {
  const { keyboard, dispatch }: any = useKeyboardContext();
  const [activePage, setActivePage] = useState(false);
  const [queryToSearch, setQueryToSearch] = useState('');

  const history = useHistory();

  useEffect(() => {
    dispatch(changeComponent('menu'));
  }, []);

  useEffect(() => {
    if (keyboard.component === 'search') {
      setActivePage(true);
      controlHandler(keyboard.key);
    }
  }, [keyboard]);

  const controlHandler = (key: string) => {
    switch (key) {
      case 'ArrowLeft':
        // dispatch(changeComponent('menu'));
        // setActivePage(false);
        break;
      default:
        break;
    }
  };

  const handleQuery = (qs: string) => {
    let tmpQueryToSearch = queryToSearch;

    switch (qs) {
      case 'space':
        tmpQueryToSearch += ' ';
        break;
      case 'enter':
        handleSearch();
        break;
      case 'shift':

        break;
      case 'del':
        tmpQueryToSearch = tmpQueryToSearch.substr(0, tmpQueryToSearch.length - 1);
        break;
      default:
        tmpQueryToSearch += qs;
        break;
    }

    setQueryToSearch(tmpQueryToSearch);
  };

  const handleSearch = () => {
    history.push('/results');
    // dispatch(changeComponent('results'));
  };

  return (
    <S.Container active={activePage}>
      <S.PageTitle>{queryToSearch}</S.PageTitle>

      <VirtualKeyboard handleQuery={handleQuery} />
    </S.Container>
  );
};
export default Search;
