import React, { useEffect, useState } from 'react';

// import { Container } from './styles';

interface IKeyboardHandle {
  key: string;
  code: string;
}

const KeyboardHandle: React.FC = () => {
  const [keyPressed, setKeyPressed] = useState<string | null>(null);

  useEffect(() => {
    window.addEventListener('keydown', (k: IKeyboardHandle) => { setKeyPressed(k.code); }, true);
  }, []);
  return <div />;
};

export default KeyboardHandle;
