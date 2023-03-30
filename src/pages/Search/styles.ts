import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 24px auto;
  display: flex;

  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SearchContainer = styled.div`
  width: 100%;
  margin-bottom: 16px;
  display: flex;
  padding: 0 12px;

  input{
    width: 100%;
    height: 48px;
    outline: none;
    border: 2px solid ${({theme}) => theme.colors.text};
    border-radius: 4px;
    background: ${({theme}) => theme.colors.background};

    color: ${({theme}) => theme.colors.text};

    font-weight: 500;
    padding: 0 16px;

    transition: border-color 0.2s ease-in-out;

    &:focus{
      border-color: ${({ theme }) => theme.colors.red.main};
    }
  }
`;
