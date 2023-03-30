import styled from 'styled-components';

export const Container = styled.div``;

export const ListFilms = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;

  @media screen and (max-width: 780px){
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 430px){
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const LoaderFilmsPagination = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  padding: 12px;
  font-weight: 500;
  font-size: 16px;

  border-radius: 4px;
  margin: 24px 0;
  background: ${({theme}) => theme.colors.red.lighter};
  color: ${({theme}) => theme.colors.red.main};
`;
