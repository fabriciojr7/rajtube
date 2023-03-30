import styled from 'styled-components';

export const Container = styled.div`
  height: 280px;
  width: 13rem;
  border-radius: 4px;
  position: relative;

  img{
    border-radius: 4px;
  }

  .overlay{
    border-radius: 4px;
    position: absolute;
    top: 200px;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
  }

  .content{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${({theme}) => theme.colors.text};

    h3{
      opacity: 0.8;
      font-size: 18px;
    }

    p{
      text-align: center;
      opacity: 0.6;
      font-size: 14px;
    }
  }

  @media screen and (max-width: 768px){
    width: 10.5rem;
    height: 260px;
  }

  @media screen and (max-width: 425px){
    width: 7rem;
    height: 200px;

    .overlay{
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      top: 130px;
    }

    .content{
      text-align: center;

      h3{
        font-size: 14px;
      }

      p{
        font-size: 12px;
      }
    }
  }

  @media screen and (max-width: 375px){
    width: 6rem;
    height: 180px;
  }

  @media screen and (max-width: 320px){
    width: 5rem;
    height: 160px;

    .overlay{
      top: 90px;
    }
  }
`;
