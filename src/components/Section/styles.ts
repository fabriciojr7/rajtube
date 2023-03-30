import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 24px auto;
  padding: 0 32px;

  h2{
    color: ${({theme}) => theme.colors.text};
  }

  .separator{
    height: 8px;
    width: 100px;
    background: ${({theme}) => theme.colors.red.main};
    margin: 4px 0 16px 0;
  }

  @media screen and (max-width: 430px){
    h2{
      font-size: 20px;
    }
  }

  @media screen and (max-width: 320px){
    h2{
      font-size: 18px;
    }
  }
`;
