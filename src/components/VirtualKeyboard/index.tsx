import React, { useEffect, useState } from 'react';
import { useKeyboardContext } from '../../context/KeyboardContext';

import * as K from './styles';

interface IVirtualKeyboard{
  handleQuery(qs: string): void;
}

const VirtualKeyboard: React.FC<IVirtualKeyboard> = ({ handleQuery }: IVirtualKeyboard) => {
  const keyMap = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+', 'del'],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"', 'enter'],
    ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '?'],
    ['space'],
    [],
  ];

  const { keyboard, dispatch }: any = useKeyboardContext();
  const [activeKeyboard, setActiveKeyboard] = useState(true);
  const [activeKey, setActiveKey] = useState([-1, -1]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (activeKeyboard && keyboard.component === 'search') {
      if (activeKey[0] !== -1 && activeKey[0] !== -1) {
        controlHandler(keyboard.key);
      } else {
        setActiveKey([0, 0]);
      }
    }
  }, [keyboard]);

  const controlHandler = (key: string) => {
    let newKeyX = activeKey[0];
    let newKeyY = activeKey[1];

    switch (key) {
      case 'ArrowRight':
        newKeyX += newKeyX + 1 < keyMap[newKeyY].length ? 1 : 0;
        newKeyY += 0;
        break;
      case 'ArrowLeft':
        newKeyX -= newKeyX > 0 ? 1 : 0;
        newKeyY += 0;
        break;
      case 'ArrowDown':
        newKeyY += newKeyY + 2 < keyMap.length ? 1 : 0;
        newKeyX = keyMap[newKeyY + 1]?.length < newKeyX
          ? keyMap[newKeyY].length - 1 : newKeyX + 0;
        break;
      case 'ArrowUp':
        newKeyX += 0;
        newKeyY -= newKeyY > 0 ? 1 : 0;
        break;
      case 'Enter':
        handleQuery(keyMap[activeKey[1]][activeKey[0]]);
        break;
      default:
        break;
    }
    setActiveKey([newKeyX, newKeyY]);
  };

  // const handleQuery = (qs: string) => {
  //   console.log(qs);
  // };

  return (
    <K.Container>
      {keyMap.map((column: any, keyY: number) => (
        <K.Line>
          {column.map((key: any, keyX: number) => (
            <K.Key active={activeKey[0] === keyX && activeKey[1] === keyY}>{key}</K.Key>
          ))}
        </K.Line>
      ))}
    </K.Container>
  );
};

export default VirtualKeyboard;
