import styled from 'styled-components';

export const Container = styled.div`
  height: 300px;
  width: 34rem;
  border-radius: 4px;
  cursor: pointer;
  position: relative;

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

      .content{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${({theme}) => theme.colors.text};
      }
    }
  }
  .content{
    display: none;
  }

  @media screen and (max-width: 1024px){
    width: 29rem;
  }

  @media screen and (max-width: 768px){
    width: 96%;
  }

  @media screen and (max-width: 425px){
    height: 260px;
  }
`;

export const ContainerImage = styled.div`
  width: 100%;
  height: 100%;

  img{
    border-radius: 4px;
  }
`;
