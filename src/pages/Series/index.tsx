import { useEffect, useState } from 'react';
import { getTopRated } from '../../api/tmdb-api';
import { BannerHero } from '../../components/BannerHero';
import { Catalog } from '../../components/Catalog';
import { Loader } from '../../components/Loader';
import { Slider } from '../../components/Slider';
import { Film } from '../../interfaces';
import { Content } from './styles';

export function Series(){
  const [seriesTrendings, setSeriesTrendings] = useState<Film[]>([]);
  const [loading, setLoading] = useState(true);

  const loadSeriesTrendings = async () => {
    try{
      setLoading(true);
      setSeriesTrendings(await getTopRated('tv'));
    } catch(err) {
      console.log('Series: ', err);
    }finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSeriesTrendings();
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
          seriesTrendings.map((film) => (
            <BannerHero key={film.id} film={film}/>
          ))
        }
      </Slider>

      <Content>
        <Catalog type='tv'/>
      </Content>
    </>
  );
}
