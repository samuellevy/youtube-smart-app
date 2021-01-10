import styled from 'styled-components';
import { colors } from '../../global';

interface IOptionsBox {
  active?: boolean;
}

interface IButton {
  active?: boolean;
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.grayBg};
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  iframe {
    width: 100vw;
    height: 100vh;
  }
`;

export const OptionsBox = styled.div<IOptionsBox>`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.grayBg}aa;
  position: absolute;
  top: 0;
  left: 0;
  /* display: ${(props) => (props.active ? 'flex' : 'none')}; */
  display: flex;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity .5s ease;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button<IButton>`
  padding: 10px 15px;
  border-radius: 10px;
  background-color: ${(props) => (props.active ? colors.grayBg : colors.gray)};
  color: ${(props) => (props.active ? 'white' : 'black')};
  margin: 0 10px;
  font-family: 'Open Sans';
  font-size: 18px;
`;
