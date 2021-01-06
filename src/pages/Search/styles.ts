import styled from 'styled-components';
import { colors } from '../../global';

interface IContainer {
  active?: boolean;
}

export const Container = styled.div<IContainer>`
  padding: 25px 0 0 25px;
  padding-left: 250px;
  transform: ${(props) => (props.active ? 'translateX(-140px)' : 'translateX(0)')};
  transition: transform 200ms linear;
`;
export const PageTitle = styled.h1`
  color: ${colors.gray};
  font-size: 1vw;
  text-transform: uppercase;
`;
export const Track = styled.div`
  display: flex;
`;
export const CategoryTitle = styled.h1`
  width: 100%;
`;
