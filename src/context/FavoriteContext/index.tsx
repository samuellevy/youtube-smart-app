import React, { createContext, useReducer, useContext } from 'react';

// create context
export const FavoritesContext = createContext([]);

// interface
interface IFavoritesState {
  favorites: INewFavoriteState[];
}

interface INewFavoriteState {
  id: string;
  title: string;
  channelTitle: string;
}

// set initial items
const INITIAL_STATE: IFavoritesState = {
  favorites: [] as INewFavoriteState[],
};

// set actions names
export const ADD_FAVORITE = 'ADD_FAVORITE';

// action methods
export const addFavorite = (favorite: INewFavoriteState) => ({ type: ADD_FAVORITE, favorite });

// reducers
export const favoriteReducer = (state: IFavoritesState, action: any) => {
  const tmpFavorites = state.favorites;
  const totalSameFavorite = tmpFavorites.filter(
    (item) => item.id === action.favorite.id && item,
  ).length;

  switch (action.type) {
    case ADD_FAVORITE:
      if (totalSameFavorite === 0) {
        tmpFavorites.push(action.favorite);
      }
      return { ...state, favorites: tmpFavorites };
    default:
      return state;
  }
};

// provider
export const FavoritesProvider = (props: any) => {
  const [favorites, dispatch] = useReducer(favoriteReducer, INITIAL_STATE);

  const favoritesData = { favorites, dispatch };

  return <FavoritesContext.Provider value={favoritesData} {...props} />;
};

// hook use context
export const useFavoritesContext = () => useContext(FavoritesContext);
