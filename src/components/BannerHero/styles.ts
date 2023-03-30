import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80vh;
  position: relative;
  display: flex;
`;

export const ContainerImage = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  .overlay{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    background: linear-gradient(
      to right,
      ${({theme}) => theme.colors.background},
      transparent 60%,
      ${({theme}) => theme.colors.background}
    ),
    linear-gradient(
      to bottom,
      transparent 30%,
      ${({theme}) => theme.colors.background}
    );
  }
`;

export const Content = styled.div`
  padding: 0 0 0 16rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 10;
  color: ${({theme}) => theme.colors.text};

  p{
    width: 800px;
    margin-bottom: 24px;

    &.title{
      font-size: 56px;
      font-weight: bold;
    }

    &.description{
      display: -webkit-box;
      -webkit-line-clamp: 3;
      overflow: hidden;
      -webkit-box-orient: vertical;

      font-weight: 500;
      font-size: 18px;
      line-height: 28px;
    }
  }

  .genres{
    display: flex;
    list-style: none;
    gap: 8px;

    li{
      background: ${({theme}) => theme.colors.red.main};
      padding: 12px;
      font-size: 14px;
      font-weight: bold;
      border-radius: 20px;
    }
  }

  button{
    display: flex;
    align-items: center;
    gap: 8px;
    border-radius: 4px;
    border: none;
    outline: none;
    margin-top: 24px;

    font-weight: bold;
    color: ${({theme}) => theme.colors.text};
    background: ${({theme}) => theme.colors.red.main};
    font-size: 16px;

    padding: 8px 16px;
    transition: background 0.2s ease-in-out;

    &:hover{
      background: ${({theme}) => theme.colors.red.dark};
    }
  }

  @media screen and (max-width: 1024px){
    padding-left: 4rem;

    p{
      width: 550;
    }
  }

  @media screen and (max-width: 800px){
    padding-left: 4rem;

    p{
      width: 600px;

      &.title{
        font-size: 48px;
      }
    }
  }

  @media screen and (max-width: 500px){
    padding-left: 2rem;

    p{
      width: 350px;

      &.title{
        font-size: 32px;
      }
    }

    .genres{
      li{
        padding: 10px;
        font-size: 12px;
      }
    }

    button{
      gap: 4px;
      font-size: 12px;
    }
  }

  @media screen and (max-width: 400px){
    padding-left: 1.5rem;

    p{
      width: 280px;

      &.title{
        font-size: 28px;
      }
    }

    .genres{
      width: 90%;
      flex-wrap: wrap;
    }
  }
`;


