import styled from 'styled-components';

interface MenuProps{
  opened: boolean
}

export const Container = styled.header<MenuProps>`
  display: flex;
  /* width: 100%; */

  align-items: center;
  justify-content: space-between;
  padding: 8px 24px;

  background: ${({theme}) => theme.colors.headerFooter};

  nav{
    display: flex;
    gap: 24px;
    font-size: 24px;
    font-weight: 500;

    span{
      color: ${({theme}) => theme.colors.text};
      text-decoration: none;
      transition: background 0.2s ease-in-out;
      cursor: pointer;
      width: 100%;
      padding: 8px;
      border-radius: 4px;

      &:hover{
        background: ${({theme}) => theme.colors.red.lighter};
      }

      &.active{
        background: ${({theme}) => theme.colors.red.main};
      }
    }
  }

  @media screen and (max-width: 768px){
    nav{
      text-align: center;
      display: ${({opened})=> opened ? 'flex': 'none'};
      flex-direction: column;
      align-items: center;
      padding: 32px 16px;

      position: absolute;
      top: 62px;
      left: 0;
      right: 0;
      z-index: 100;

      background: ${({theme}) => theme.colors.headerFooter};
      border-bottom: 2px solid ${({theme}) => theme.colors.red.main};
    }
  }
`;

export const MenuMobile = styled.div<MenuProps>`
  display: none;
  z-index: ${({opened})=> opened ? 11: 0};

  svg{
    color: ${({theme}) => theme.colors.text};
    font-size: 32px;
  }

  .menu-open{
    display: ${({opened})=> !opened ? 'block': 'none'};
  }

  .menu-close{
    display: ${({opened})=> !opened ? 'none': 'block'};
  }

  @media screen and (max-width: 768px){
    display: flex;
  }
`;
