import { Film, Season } from './interfaces';
import { MediaType } from './types';


export const formatResult = (obj: any, mediaType?: MediaType): Film => {
  return {
    id: obj.id,
    title: obj.title || obj.name,
    description: obj.overview,
    coverPath: obj.backdrop_path,
    posterPath: obj.poster_path,
    genreIds: obj.genre_ids || obj.genres?.map(((g:any) => g.id)) || [],
    mediaType: mediaType || obj.media_type,
    releaseDate: obj.release_date || obj.first_air_date,
    seasons:
      obj.seasons?.map((season: any) => ({
        id: season.id,
        filmName: obj.title,
        name: season.name,
        overview: season.overview,
        posterPath: season.poster_path,
        seasonNumber: season.season_number,
        episodes: [],
        airDate: season.air_date
      } satisfies Season)) || []
  };
};

export const isFilm = (film: any): film is Film => {
  return (<Film>film) !== undefined;
};

export const tmdbImage = (path: string) => {
  if(!path) return '';

  return `https://image.tmdb.org/t/p/original/${path}`;
};

export const mergeFilms = (movies: Film[], series: Film[], limit = 6) => {
  const arrs: Film[] = [];

  for(let i = 0; i < limit; i ++){
    let film: unknown;

    if(i % 2 === 1){
      if(series[i - 1]){
        film = series[i - 1];
      }
    }else{
      if(movies[i - 1]){
        film = movies[i - 1];
      }
    }

    if(isFilm(film)){
      arrs.push(film);
    }
  }

  return arrs;
};

export const youtubeThumbnail = (key: string) => {
  return `https://img.youtube.com/vi/${key}/mqdefault.jpg`;
};

export const formatDate = (date: string) => {
  const dt = new Date(date);
  const day = dt.getDate() < 10 ? `0${dt.getDate()}` :  dt.getDate();
  const month = (dt.getMonth() + 1) < 10 ? `0${dt.getMonth() + 1}` :  dt.getMonth() + 1;

  return `${day}/${(month)}/${dt.getFullYear()}`;
};
