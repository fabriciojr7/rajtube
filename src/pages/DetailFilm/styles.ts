import styled from 'styled-components';

export const Hero = styled.div`
  height: 65vh;
  position: relative;
  left: 0;
  right: 0;
  top: 0;

  .overlay{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    background: linear-gradient(
      to bottom,
      transparent 30%,
      ${({theme}) => theme.colors.background}
    );
  }
`;

export const ContentHero = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: -300px;


  display: flex;
  align-items: center;
  position: relative;
  z-index: 10;


  img{
    width: 400px;
    height: 600px;
    border-radius: 4px;
  }

  .information{
    margin-left: 24px;
    color: ${({theme}) => theme.colors.text};
    overflow: hidden;

    .title{
      font-size: 32px;
      font-weight: bold;
      margin-bottom: 16px;


      display: -webkit-box;
      -webkit-line-clamp: 1;
      overflow: hidden;
      -webkit-box-orient: vertical;
    }

    .description{
      font-size: 18px;
      line-height: 24px;
      opacity: 0.7;
      font-weight: 500;

      display: -webkit-box;
      -webkit-line-clamp: 3;
      overflow: hidden;
      -webkit-box-orient: vertical;
    }

    ul{
      display: flex;
      list-style: none;
      gap: 8px;
      margin-bottom: 16px;

      li{
        background: ${({theme}) => theme.colors.red.main};
        padding: 12px;
        font-size: 14px;
        border-radius: 20px;
      }
    }
  }

  @media screen and (max-width: 1024px){
    width: 90%;

    img{
      width: 300px;
      height: 500px;
    }
  }

  @media screen and (max-width: 768px){
    flex-direction: column;
    width: 100%;

    img{
      width: 280px;
      height: 400px;
    }

    .title{
      text-align: center;
      margin-top: 24px;

    }
  }

  @media screen and (max-width: 425px){
    .information{
        .title{
        text-align: center;
        font-size: 18px;
      }
    }
  }
`;
