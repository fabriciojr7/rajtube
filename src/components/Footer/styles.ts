import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 68px;
  background: ${({theme}) => theme.colors.headerFooter};

  span{
    color: ${({theme}) => theme.colors.text};
  }
`;
