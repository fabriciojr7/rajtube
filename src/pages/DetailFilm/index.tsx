import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCasts, getDatail, getRecommendations, getTrailers } from '../../api/tmdb-api';
import { useGlobalContext } from '../../components/App';
import { Card } from '../../components/Card';
import { CardPerson } from '../../components/CardPerson';
import { CardSeason } from '../../components/CardSeason';
import { CardTrailer } from '../../components/CardTrailer';
import { Loader } from '../../components/Loader';
import { Section } from '../../components/Section';
import { Slider } from '../../components/Slider';
import { Cast, Film, Trailer } from '../../interfaces';
import { MediaType } from '../../types';
import { tmdbImage } from '../../utils';
import { Hero, ContentHero } from './styles';

interface DetailProps{
  mediaType: MediaType
}

import rajFolder from '../../assets/rajFolder.jpg';

export function DetailFilm({mediaType}: DetailProps){
  const [loading, setLoading] = useState(true);
  const [casts, setCasts] = useState<Cast[]>([]);
  const [trailers, setTrailers] = useState<Trailer[]>([]);
  const [recommendations, setRecommendations] = useState<Film[]>([]);
  const {id} = useParams();
  const [film, setFilm] = useState<Film | null>(null);
  const globalContext = useGlobalContext();
  const navigate = useNavigate();

  const loadData = async () => {
    try {
      setLoading(true);
      const filmData = await getDatail(mediaType, parseInt(id as string));

      if(filmData){
        setFilm(filmData);

        const [
          casts,
          trailers,
          recommendations
        ] = await Promise.all([
          await getCasts(filmData?.mediaType, filmData?.id),
          await getTrailers(filmData?.mediaType, filmData?.id),
          await getRecommendations(filmData?.mediaType, filmData?.id)
        ]);

        setCasts(casts);
        setTrailers(trailers);
        setRecommendations(recommendations);
        setLoading(false);
      }
    } catch(err) {
      console.log('Detail: ', err);
    }finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0
    });
    loadData();
  }, [id]);

  if(!film){
    return null;
  }

  if(loading){
    return <Loader/>;
  }

  return (
    <>
      <Hero>
        <div className="overlay"/>
        <img src={tmdbImage(film.coverPath) || rajFolder} alt="" />
      </Hero>

      <ContentHero>
        <img src={tmdbImage(film.posterPath)} alt="" />

        <div className='information'>
          <p className="title">{film.title}</p>
          <ul className='list-genres'>
            {film.genreIds.map((genreId, index) => (
              <li key={index}>{
                globalContext.genres[film.mediaType].find(
                  (genre) => genre.id === genreId
                )?.name
              }</li>
            ))}
          </ul>
          <p className="description">{film.description}</p>
        </div>
      </ContentHero>

      {/* Elenco */}
      <Section title='Elenco' arrayNumber={casts.length}>
        <Slider
          slidesToShow={casts.length < 5 ? casts.length : 5}
          slidesToScroll={1}
          isCastCard
        >
          {() =>
            casts.map((cast) => (
              <CardPerson key={cast.id} cast={cast}/>
            ))}
        </Slider>
      </Section>

      {/* Trailers */}
      <Section title='Trailers' arrayNumber={trailers.length}>
        <Slider
          slidesToScroll={1}
          slidesToShow={1}
        >
          {() =>
            trailers.map((trailer) => (
              <CardTrailer key={trailer.id} trailer={trailer}/>
            ))}
        </Slider>
      </Section>

      {mediaType === 'tv' && (
        /* Temporadas */
        <Section title='Temporadas' arrayNumber={film.seasons.length}>
          <Slider
            slidesToShow={film.seasons.length < 2 ? film.seasons.length : 2}
            slidesToScroll={1}
            isSessionCard
          >
            {(onSwipe) =>
              film.seasons.map((season) => (
                <CardSeason
                  key={season.id}
                  season={season}
                  onClick={() => !onSwipe ? navigate(`/tv/${film.id}/season/${season.seasonNumber}`) : ''}
                />
              ))}
          </Slider>
        </Section>
      )}

      {/* Recomendados */}
      <Section title='Recomendados' arrayNumber={recommendations.length}>
        <Slider
          slidesToShow={recommendations.length < 4 ? recommendations.length : 4}
          slidesToScroll={1}
          isMovieCard
        >
          {(onSwipe) =>
            recommendations.map((recommendation) => (
              <Card
                key={recommendation.id}
                film={recommendation}
                onClick={() => !onSwipe ? navigate(`/${recommendation.mediaType}/${recommendation.id}`) : ''}
              />
            ))}
        </Slider>
      </Section>
    </>
  );
}
