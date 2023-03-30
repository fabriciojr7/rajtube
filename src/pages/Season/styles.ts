import styled from 'styled-components';

export const Hero = styled.div`
  height: 300px;
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
  margin-top: -150px;

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
    margin-left: 16px;
    color: ${({theme}) => theme.colors.text};

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
      -webkit-line-clamp: 6;
      overflow: hidden;
      -webkit-box-orient: vertical;
    }

    .season-info{
      line-height: 24px;
      opacity: 0.8;
      font-weight: bold;
      margin-top: 16px;
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
      width: 380px;
      height: 500px;
    }
  }

  @media screen and (max-width: 768px){
    flex-direction: column;

    img{
      width: 280px;
      height: 400px;
    }

    .information{
      width: 100%;
      margin-top: 24px;

      .title{
        text-align: center;
      }
    }
  }

  @media screen and (max-width: 425px){
    .information{
      .title{
        text-align: left;
        font-size: 24px;
      }
    }
  }
`;

export const EpisodeContainer = styled.ul`
  list-style: none;

  li{
    padding: 8px;
    display: flex;
    gap: 16px;
    border-radius: 4px;
    margin: 16px 0;
    cursor: pointer;
    color: ${({theme}) => theme.colors.text};

    &:hover{
      background: #262626;
    }

    img{
      width: 300px;
      /* min-width: 300px; */
      height: 200px;
    }

    .informations{
      width: 100%;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    .title{
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 8px;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .description{
      opacity: 0.8;
      display: -webkit-box;
      -webkit-line-clamp: 6;
      overflow: hidden;
      -webkit-box-orient: vertical;
    }

    .footer-episode{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: auto;
    }
  }

  @media screen and (max-width: 425px){
    li{
      flex-direction: column;

      img{
        width: 100%;
      }

      .title{
        font-size: 20px;
      }

      .footer-episode{
        margin-top: 8px;

        p:last-child{
          font-size: 14px;
        }
      }
    }
  }

  /* @media screen and (max-width: 375px){
    li{
      img{
        width: 100px;
        height: ;
      }
    }
  } */
`;
