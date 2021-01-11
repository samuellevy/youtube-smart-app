import styled from 'styled-components';
import { colors } from '../../global';

interface IKey {
  active?:boolean;
}

export const Container = styled.div`
  background-color: #000000aa;
  width: 600px;
  display: flex;
  flex-direction: column;
`;

export const Line = styled.div`
  display: flex;
  justify-content: center;
`;

export const Key = styled.div<IKey>`
  border: 1px black solid;
  padding: 10px 15px;
  background-color: ${(props) => (props.active ? colors.darkGray : colors.grayBg)}
`;
