import styled from 'styled-components';
import { colors } from '../../global';

interface IContainer {
  active?: boolean;
  position?: number;
  activeItem: number;
}

interface IThumbBox {
  active?: boolean;
}

export const Container = styled.div<IContainer>`
  display: flex;
  flex-direction: column;
  width: 30vw;
  transform: ${(props) => `translateX(calc(-29vw*${props.activeItem >= 0 ? props.activeItem : 0}))`};
  transition: all .2s ease-in;
`;

export const ThumbBox = styled.div<IThumbBox>`
  /* border-radius: 8px;
  border: 5px #fff solid; */
  /* padding: 7px 7px 2px 7px; */
  border: ${(props) => (props.active ? `.5vw solid ${colors.white}` : '.5vw solid transparent')};
`;
export const ThumbImage = styled.img`
  width: 28vw;
`;
export const Title = styled.h2``;
export const Author = styled.div`
  color: ${colors.gray};
  font-size: 14px;
`;
export const Footer = styled.div`
  color: ${colors.gray};
  font-size: 14px;
`;
export const Info = styled.div``;
