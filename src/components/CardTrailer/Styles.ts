import styled from 'styled-components';

export const Container = styled.iframe`
  width: 100%;
  height: 600px;

  @media screen and (max-width: 768px){
    height: 400px;
  }

  @media screen and (max-width: 425px){
    height: 300px;
  }

  @media screen and (max-width: 320px){
    height: 220px;
  }
`;
