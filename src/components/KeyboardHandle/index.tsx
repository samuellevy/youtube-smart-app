import React, { useEffect, useState } from 'react';
import { useKeyboardContext, updateKey } from '../../context/KeyboardContext';

// import { Container } from './styles';

interface IKeyboardHandle {
  key: string;
  code: string;
}

const KeyboardHandle: React.FC = () => {
  const [keyPressed, setKeyPressed] = useState<string>('');
  const { dispatch }: any = useKeyboardContext();

  useEffect(() => {
    window.addEventListener('keydown', (k: IKeyboardHandle) => { setKeyPressed(k.code); }, true);
    window.addEventListener('keyup', (k: IKeyboardHandle) => { setKeyPressed(''); }, true);
  }, []);

  useEffect(() => {
    dispatch(updateKey(keyPressed));
  }, [keyPressed]);
  return <div />;
};

export default KeyboardHandle;
