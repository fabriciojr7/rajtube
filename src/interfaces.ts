import { MediaType } from './types';

export interface Episode{
  id: number
  name: string
  overview: string
  airDate: string
  stillPath: string
  episodeNumber: number
}

export interface Season{
  id: number
  filmName: string
  name: string
  overview: string
  seasonNumber: number
  posterPath: string
  episodes: Episode[]
  airDate: string
}

export interface Film{
  id: number
  mediaType: MediaType
  title: string
  description: string
  posterPath: string
  coverPath: string
  genreIds: number[]
  releaseDate: string
  seasons: Season[]
}

export interface Cast {
  id: number
  name: string
  characterName: string
  profilePath: string
}

export interface Trailer {
  id: number
  key: string
}

export interface Genre{
  id: number
  name: string
}
