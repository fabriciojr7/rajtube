import { useEffect, useState } from 'react';
import { getTopRated } from '../../api/tmdb-api';
import { BannerHero } from '../../components/BannerHero';
import { Catalog }  from '../../components/Catalog';
import { Loader } from '../../components/Loader';
import { Slider } from '../../components/Slider';
import { Film } from '../../interfaces';
import { Content } from './styles';

export function Movies(){
  const [moviesTrendings, setMoviesTrendings] = useState<Film[]>([]);
  const [loading, setLoading] = useState(true);

  const loadMoviesTrendings = async () => {
    try{
      setLoading(true);
      setMoviesTrendings(await getTopRated('movie'));
    } catch(err) {
      console.log('Movies: ', err);
    }finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMoviesTrendings();
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
          moviesTrendings.map((film) => (
            <BannerHero key={film.id} film={film}/>
          ))
        }
      </Slider>

      <Content>
        <Catalog type='movie'/>
      </Content>
    </>
  );
}
