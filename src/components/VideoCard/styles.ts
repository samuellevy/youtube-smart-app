import styled from 'styled-components';
import { colors } from '../../global';

interface IThumbBox {
  active?: boolean;
}

export const Container = styled.div`
`;

export const ThumbBox = styled.div<IThumbBox>`
  /* border-radius: 8px;
  border: 5px #fff solid; */
  padding: 7px 7px 2px 7px;
  border: ${(props) => (props.active ? `3px solid ${colors.white}` : '3px solid transparent')};
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
