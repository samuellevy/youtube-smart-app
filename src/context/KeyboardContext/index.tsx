import React, { createContext, useReducer, useContext } from 'react';

// create context
export const KeyBoardContext = createContext([]);

// interface
interface IKeyboardState {
  key: string,
  lastKey: string,
  component: string,
}

// set initial items
const INITIAL_STATE = {
  key: '',
  lastKey: '',
  component: '',
};

// set actions names
export const UPDATE_KEY = 'UPDATE_KEY';
export const CHANGE_COMPONENT = 'CHANGE_COMPONENT';

// action methods
export const updateKey = (key: string) => ({ type: UPDATE_KEY, key });
export const changeComponent = (component: string) => ({ type: CHANGE_COMPONENT, component });

// reducers
export const controlKeyReducer = (state: IKeyboardState, action: any) => {
  switch (action.type) {
    case UPDATE_KEY:
      return { ...state, key: action.key, lastKey: state.key };
    case CHANGE_COMPONENT:
      console.log(action.component);
      return { ...state, component: action.component };
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
