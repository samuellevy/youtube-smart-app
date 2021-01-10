import styled from 'styled-components';
import { colors } from '../../global';

interface IContainer {
  active?: boolean;
  activeModule: number | 0;
}

export const Container = styled.div<IContainer>`
  padding: 25px 0 0 25px;
  padding-left: 250px;
  transform: ${(props) => (props.active ? `translateX(-140px) translateY(calc(-80vh*${props.activeModule}))` : `translateX(0) translateY(calc(-80vh*${props.activeModule}))`)};
  opacity: 1;
  transition: all 200ms linear;
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
