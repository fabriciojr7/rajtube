import axios, { AxiosResponse } from 'axios';
import { Cast, Episode, Film, Genre, Season, Trailer } from '../interfaces';
import { MediaType } from '../types';
import { formatResult } from '../utils';

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_APP_TMDB_API_URL
});

axiosClient.interceptors.request.use((config) => {
  return {
    ...config,
    params:{
      ...config.params,
      api_key: import.meta.env.VITE_APP_TMDB_API_KEY,
      language: 'pt-BR',
    }
  };
});

export const getTrendings = async (mediaType: MediaType): Promise<Film[]> => {
  try {
    const {data} = await axiosClient.get<
      any,
      AxiosResponse<{
        results: unknown[]
      }>
    >(`trending/${mediaType}/week`);

    return data.results.map((value) => formatResult(value, mediaType));
  } catch (error) {
    console.log(error);
  }

  return [];
};

export const getInTheaters = async (): Promise<Film[]> => {
  try {
    const {data} = await axiosClient.get<
      any,
      AxiosResponse<{
        results: unknown[]
      }>
    >('/movie/now_playing');

    return data.results.map((value) => formatResult(value, 'movie'));
  } catch (error) {
    console.log(error);
  }

  return [];
};

export const getPopulars = async (mediaType: MediaType, page = 1): Promise<Film[]> => {
  try {
    const {data} = await axiosClient.get<
      any,
      AxiosResponse<{
        results: unknown[]
      }>
    >(`/${mediaType}/popular`, {
      params: {
        page
      }
    });

    return data.results.map((value) => formatResult(value, mediaType));
  } catch (error) {
    console.log(error);
  }

  return [];
};

export const getTopRated = async (mediaType: MediaType, page = 1): Promise<Film[]> => {
  try {
    const {data} = await axiosClient.get<
      any,
      AxiosResponse<{
        results: unknown[]
      }>
    >(`/${mediaType}/top_rated`, {
      params: {
        page
      }
    });

    return data.results.map((value) => formatResult(value, mediaType));
  } catch (error) {
    console.log(error);
  }

  return [];
};

export const search = async (
  query: string,
  page = 1
): Promise<{

  totalPages: number
  totalResults: number
  films: Film[]
}> => {
  try {
    const { data } = await axiosClient.get<
      any,
      AxiosResponse<{
        total_pages: number,
        total_results: number
        results: unknown[]
      }>
    >('/search/multi', {
      params: {
        query,
        page,
      },
    });

    const arrayFilms = data.results.map((value) => formatResult(value));

    return {
      totalPages: data.total_pages,
      totalResults: data.total_results,
      films: arrayFilms.filter(film => {
        return film.mediaType === 'movie' || film.mediaType === 'tv';
      })
    };
  } catch (error) {
    console.error(error);
  }

  return {
    totalPages: 0,
    totalResults: 0,
    films: [],
  };
};

export const getGenre = async (mediaType: MediaType): Promise<Genre[]> => {
  try {
    const {data} = await axiosClient.get<
      any,
      AxiosResponse<{
        genres: unknown[]
      }>
    >(`/genre/${mediaType}/list`);

    return data.genres as Genre[];
  } catch (error) {
    console.log(error);
  }

  return [];
};

export const getDatail = async (mediaType: MediaType, id: number): Promise<Film | null> => {
  try {
    const {data} = await axiosClient.get(`/${mediaType}/${id}`);

    return formatResult(data, mediaType);
  } catch (error) {
    console.log(error);
  }

  return null;
};

export const getCasts = async (mediaType: MediaType, id: number): Promise<Cast[]> => {
  try {
    const {data} = await axiosClient.get<any, AxiosResponse<{
      cast: any[]
    }>
    >(`/${mediaType}/${id}/credits`);

    return data.cast.map((cast)=> ({
      id: cast.id,
      characterName: cast.character,
      name: cast.name,
      profilePath: cast.profile_path
    })) ?? [];
  } catch (error) {
    console.log(error);
  }

  return [];
};

export const getTrailers = async (
  mediaType: MediaType,
  id: number
): Promise<Trailer[]> => {
  try {
    const {data} = await axiosClient.get<
      any,
      AxiosResponse<{
        results: any[]
      }>
    >(`/${mediaType}/${id}/videos`);

    return (
      data.results
        .filter(res => res.site.toLowerCase() === 'youtube')
        .map((trailer)=> ({
          id: trailer.id,
          key: trailer.key
        })) ?? []
    );
  } catch (error) {
    console.log(error);
  }

  return [];
};

export const getRecommendations = async (mediaType: MediaType, id: number): Promise<Film[]> => {
  try {
    const {data} = await axiosClient.get<
      any,
      AxiosResponse<{
        results: unknown[]
      }>
    >(`/${mediaType}/${id}/recommendations`);

    return data.results.map((value) => formatResult(value, mediaType));
  } catch (error) {
    console.log(error);
  }

  return [];
};

export const getSeason = async (id: number, seasonNumber: number): Promise<Season | null> => {
  try {
    const {data} = await axiosClient.get<any, any>(`/tv/${id}/season/${seasonNumber}`);
    const film = await getDatail('tv', id);

    return {
      id: data.id,
      filmName: film?.title || '',
      name: data.name,
      overview: data.overview,
      posterPath: data.poster_path,
      seasonNumber: data.season_number,
      airDate: data.air_date,
      episodes: data.episodes.map((episode: any) => ({
        id: episode.id,
        name: episode.name,
        overview: episode.overview,
        airDate: episode.air_date,
        stillPath: episode.still_path,
        episodeNumber: episode.episode_number
      } satisfies Episode))
    };
  } catch (error) {
    console.log(error);
  }

  return null;
};

export const discover = async (mediaType: MediaType, page = 1): Promise<{
  films: Film[],
  totalPages: number
}> => {
  try {
    const {data} = await axiosClient.get<
      any,
      AxiosResponse<{
        total_pages: number
        results: unknown[]
      }>
    >(`discover/${mediaType}`, {
      params: {
        page: page,
      }
    });

    return {
      films: data.results.map((value) => formatResult(value, mediaType)),
      totalPages: data.total_pages
    };
  } catch (error) {
    console.log(error);
  }

  return {
    films: [],
    totalPages: 0
  };
};
