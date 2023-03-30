import { createContext, useContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { getGenre } from '../../api/tmdb-api';
import { Genre } from '../../interfaces';
import { AppRoutes } from '../../routes/AppRoutes';

import GlobalStyles from '../../styles/global';
import {themeDefault} from '../../styles/themes/default';
import { MediaType } from '../../types';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Loader } from '../Loader';
import { Container, Content } from './styles';

type Genres = {
  [key in MediaType]: Genre[]
}

export const GlobalContext = createContext<{
  genres: Genres
}>({
  genres: {
    movie: [],
    tv: []
  } satisfies Genres
});

export const useGlobalContext = () => useContext(GlobalContext);

export function App() {
  const [genres, setGenres] = useState<Genres>({
    movie: [],
    tv: []
  });

  const fetchGenres = async () => {
    const movie = await getGenre('movie');
    const tv = await getGenre('tv');

    setGenres({
      movie,
      tv
    });
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  // if(){
  //   return <Loading/>;
  // }

  return (
    <ThemeProvider theme={themeDefault}>
      <GlobalStyles/>
      <Container>
        <GlobalContext.Provider value={{
          genres
        }}>
          <Header/>

          <Content>
            {!genres.movie.length || !genres.tv.length ? (
              <Loader/>
            ): (
              <AppRoutes/>
            )}

          </Content>

          <Footer/>
        </GlobalContext.Provider>
      </Container>
    </ThemeProvider>
  );
}
