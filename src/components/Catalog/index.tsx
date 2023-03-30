import { useEffect, useRef, useState } from 'react';
import { Card } from '../Card';
import { Film } from '../../interfaces';
import { useNavigate } from 'react-router-dom';
import { discover, search } from '../../api/tmdb-api';
import { MediaType } from '../../types';

import { Container, ListFilms, LoaderFilmsPagination } from './styles';
import { ClipLoader } from 'react-spinners';

interface CatalogProps {
  type: MediaType | 'search'
  query?: string
}

export function Catalog({type, query = ''}: CatalogProps){
  const [films, setFilms] = useState<Film[]>([]);
  const [onLoading, setOnLoading] = useState(false);
  const page = useRef(1);
  const totalPage = useRef(0);
  const loadingRef = useRef(false);
  const queryRef = useRef<string | ''>('');

  let requestFilms: (page: number) => Promise<{
    totalPages: number
    films: Film[]
  }>;

  const navigate = useNavigate();

  switch(type){
  case 'movie':
    requestFilms = (page: number) => discover('movie', page);
    break;
  case 'tv':
    requestFilms = (page: number) => discover('tv', page);
    break;
  case 'search':
    queryRef.current = query;
    requestFilms = (page: number) => search(queryRef.current, page);
    break;
  default:
    break;
  }

  const loadData = async () => {
    try {
      loadingRef.current = true;
      setOnLoading(true);

      const {films, totalPages} = await requestFilms(page.current);

      setOnLoading(false);
      loadingRef.current = false;

      totalPage.current = totalPages;
      setFilms((prevState) => [...prevState, ...films]);

    } catch (error) {
      console.log('Catalog', error);
    }
  };

  useEffect(() => {
    setFilms([]);
    loadData();
  }, [type, query]);

  function handleScrollPage(){
    if(loadingRef.current) return;

    if((window.innerHeight + window.scrollY) >= document.body.scrollHeight){
      if(totalPage.current > page.current){
        page.current ++;
        loadData();
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollPage);

    return () => {
      window.removeEventListener('scroll', handleScrollPage);
    };
  }, []);

  return (
    <Container>
      <ListFilms>
        {films?.map((film, index) => (
          <Card
            key={index}
            film={film}
            type='catalog'
            onClick={() => navigate(`/${film.mediaType}/${film.id}`)}
          />
        ))}
      </ListFilms>

      {(onLoading && page.current !== 1) && (
        <LoaderFilmsPagination>
          <ClipLoader color="#9a0a11" size={24}/>
              Carregando...
        </LoaderFilmsPagination>
      )}
    </Container>
  );
}
