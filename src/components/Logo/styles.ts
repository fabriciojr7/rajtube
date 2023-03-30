import styled from 'styled-components';

export const Container = styled.div`
  h1{
    font-size: 40px;
    color: ${({theme}) => theme.colors.red.main};
    cursor: pointer;

    span{
      color: ${({theme}) => theme.colors.text};
    }
  }
`;
