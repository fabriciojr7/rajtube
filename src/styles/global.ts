import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;

  }

  html, body{
    scroll-behavior: smooth;
    background: ${({theme}) => theme.colors.background};
  }

  img{
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  button{
    cursor: pointer;
  }
`;
