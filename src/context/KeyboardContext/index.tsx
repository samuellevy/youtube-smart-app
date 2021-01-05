import React, { createContext, useReducer, useContext } from 'react';

// create context
export const KeyBoardContext = createContext([]);

// set initial items
const INITIAL_STATE = {
  key: '',
};

// set actions names
export const UPDATE_KEY = 'UPDATE_KEY';

// action methods
export const updateKey = (key: string) => ({ type: UPDATE_KEY, key });

// reducers
export const controlKeyReducer = (state: object, action: any) => {
  switch (action.type) {
    case UPDATE_KEY:
      return { ...state, key: action.key };
    default:
      return state;
  }
};

// provider
export const KeyboardProvider = (props: any) => {
  const [keyboard, dispatch] = useReducer(controlKeyReducer, INITIAL_STATE);

  const keyboardData = { keyboard, dispatch };

  return <KeyBoardContext.Provider value={keyboardData} {...props} />;
};

// hook use context
export const useKeyboardContext = () => useContext(KeyBoardContext);
