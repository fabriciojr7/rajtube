import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getInTheaters, getPopulars, getTopRated, getTrendings } from '../../api/tmdb-api';
import { BannerHero } from '../../components/BannerHero';
import { Card } from '../../components/Card';
import { Loader } from '../../components/Loader';
import { Section } from '../../components/Section';
import { Slider } from '../../components/Slider';
import { Film } from '../../interfaces';
import { mergeFilms } from '../../utils';

export function Home(){
  const [trendings, setTrendings] = useState<Film[]>([]);
  const [inTheaters, setInTheaters] = useState<Film[]>([]);
  const [populars, setPopulars] = useState<Film[]>([]);
  const [topRatedSeries, setTopRatedSeries] = useState<Film[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Film[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const loadData = async () => {
    try {
      setLoading(true);
      const [
        ratedMovies,
        ratedSeries,
        moviesTrendings,
        seriesTrendings,
        moviesPopulars,
        seriesPopulars,
        InTheaters
      ] = await Promise.all([
        await getTopRated('movie'),
        await getTopRated('tv'),
        await getTrendings('movie'),
        await getTrendings('tv'),
        await getPopulars('movie'),
        await getPopulars('tv'),
        await getInTheaters()
      ]);

      setTopRatedMovies(ratedMovies);
      setTopRatedSeries(ratedSeries);
      setTrendings(mergeFilms(moviesTrendings, seriesTrendings));
      setPopulars(mergeFilms(moviesPopulars, seriesPopulars, 20));
      setInTheaters(InTheaters);

    } catch(err) {
      console.log('Home: ', err);
    }finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if(loading){
    return <Loader/>;
  }

  return (
    <>
      <Slider
        autoplay
        slidesToShow={1}
        slidesToScroll={1}
        arrows={false}
        infinite
      >
        {() =>
          trendings.map((film) => (
            <BannerHero key={film.id} film={film}/>
          ))
        }
      </Slider>

      <Section title='Em cartaz' arrayNumber={inTheaters.length}>
        <Slider
          isMovieCard
        >
          {(onSwipe) =>
            inTheaters.map((film) => (
              <Card
                key={film.id}
                film={film}
                onClick={() => !onSwipe? navigate(`${film.mediaType}/${film.id}`) : ''}
              />
            ))
          }
        </Slider>
      </Section>

      <Section title="Os mais populares" arrayNumber={populars.length}>
        <Slider
          isMovieCard
        >
          {(onSwipe) =>
            populars.map((film) => (
              <Card
                key={film.id}
                film={film}
                onClick={() => !onSwipe? navigate(`/${film.mediaType}/${film.id}`) : ''}
              />
            ))}
        </Slider>
      </Section>

      <Section title='Séries melhores avaliadas' arrayNumber={topRatedSeries.length}>
        <Slider
          isMovieCard
        >
          {(onSwipe) =>
            topRatedSeries.map((film) => (
              <Card
                key={film.id}
                film={film}
                onClick={() => !onSwipe? navigate(`/${film.mediaType}/${film.id}`) : ''}
              />
            ))
          }
        </Slider>
      </Section>

      <Section title='Filmes melhores avaliados' arrayNumber={topRatedMovies.length}>
        <Slider
          isMovieCard
        >
          {(onSwipe) =>
            topRatedMovies.map((film) => (
              <Card key={film.id} film={film}
                onClick={() => !onSwipe? navigate(`/${film.mediaType}/${film.id}`) : ''}
              />
            ))
          }
        </Slider>
      </Section>
    </>
  );
}


