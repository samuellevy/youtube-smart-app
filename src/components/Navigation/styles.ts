import styled from 'styled-components';
import { colors } from '../../global';

interface IContainerMenu {
  active?: boolean;
}

interface IItem {
  selected?: boolean
}

export const Container = styled.div<IContainerMenu>`
  position: fixed;
  width: 220px;
  background-color: black;
  height: 100vh;
  display: flex;
  flex-direction: column;
  transform: ${(props) => (props.active ? 'translateX(0)' : 'translateX(-140px)')};
  transition: transform 200ms linear;
`;

export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${colors.grayBg};
  border-radius: 25px;
  margin-right: 15px;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  font-size: 16px;
  padding: 25px 0;
  justify-content: center;
  align-items: center;
  background-color: ${colors.darkGray}11;
`;

export const Item = styled.li<IItem>`
  width: 100%;
  padding: 25px 25px;
  font-size: 16px;
  font-family: "Open Sans", sans-serif;
  display: flex;
  position: relative;
  svg{
    fill: ${colors.white};
    margin: 0 10px;
  }
  ${(props) => props.selected && `
    background-color: ${colors.grayBg};
    transition: background-color 200ms linear;
  `};
  }
`;
