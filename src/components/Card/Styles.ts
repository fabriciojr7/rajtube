import styled from 'styled-components';

interface ContainerProps {
  type: 'catalog' | 'section'
}

export const Container = styled.div<ContainerProps>`
  height: 400px;
  width: 16.5rem;
  border-radius: 4px;
  position: relative;
  cursor: pointer;

  .overlay{
    border-radius: 4px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 0.2s ease-in-out;

    &:hover{
      background: rgba(0, 0, 0, 0.8);
      .content h3{
        color: ${({theme}) => theme.colors.text};
      }
    }
  }

  .content{
    position: absolute;
    bottom: 24px;
    left: 0;
    padding: 0 12px;

    h3{
      color: transparent;
      font-size: 16px;
    }
  }

  @media screen and (max-width: 1024px){
    width: ${({type}) => type === 'catalog' ? '15rem' : '14rem'};
    height: ${({type}) => type === 'catalog' ? '350px' : '350px'};
  }

  @media screen and (max-width: 430px){
    width: ${({type}) => type === 'catalog' ? '12rem' : '11rem'};
    height: ${({type}) => type === 'catalog' ? '300px' : '290px'};
  }

  @media screen and (max-width: 375px){
    width: ${({type}) => type === 'catalog' ? '10.5rem' : '9.5rem'};
    height: ${({type}) => type === 'catalog' ? '280px' : '260px'};
  }

  @media screen and (max-width: 320px){
    width: ${({type}) => type === 'catalog' ? '8.8rem' : '7.6rem'};
    height: ${({type}) => type === 'catalog' ? '220px': '190px'};
  }

  @media screen and (max-width: 310px){
    width: ${({type}) => type === 'section' && '6.8rem'};
    height: ${({type}) => type === 'section' && '170px'};
  }

  @media screen and (max-width: 285px){
    width: ${({type}) => type === 'section' && '6.4rem'};
    height: ${({type}) => type === 'section' && '170px'};
  }

  @media screen and (max-width: 270px){
    width: ${({type}) => type === 'section' && '6rem'};
    height: ${({type}) => type === 'section' && '170px'};
  }
`;

export const ContainerImage = styled.div`
  width: 100%;
  height: 100%;

  img{
    border-radius: 4px;
  }
`;
