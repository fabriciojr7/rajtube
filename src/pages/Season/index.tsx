import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSeason } from '../../api/tmdb-api';
import { Loader } from '../../components/Loader';
import { Section } from '../../components/Section';
import { Episode, Season as SeasonInterface } from '../../interfaces';
import { formatDate, tmdbImage } from '../../utils';
import { ContentHero, EpisodeContainer, Hero } from './styles';

import rajEpisode from '../../assets/rajEpisode.jpg';

export function Season(){
  const [season, setSeason] = useState<SeasonInterface | null>(null);
  const [episodes, setEpisodes] = useState<Episode[] | undefined>([]);
  const [loading, setLoading] = useState(true);

  const {id, seasonNumber} = useParams();

  const loadData = async () => {
    try {
      setLoading(true);

      const data = await getSeason(
        parseInt(id as string),
        parseInt(seasonNumber as string)
      );

      setSeason(data);

      setEpisodes(data?.episodes.filter((episode) => {
        const dt = new Date();
        const dtEpisode = new Date(episode.airDate);
        return dtEpisode < dt;
      }));
    } catch (error) {
      console.log('Season', error);
    }finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0
    });
    loadData();
  }, []);

  if(!season){
    return <></>;
  }

  if(loading){
    return <Loader/>;
  }

  return (
    <>
      <Hero>
        <div className="overlay"/>
        <img src={tmdbImage(season.posterPath)} alt="" />
      </Hero>

      <ContentHero>
        <img src={tmdbImage(season.posterPath)} alt="" />

        <div className='information'>
          <p className="title">{season.filmName}</p>
          <p className='description'>{season.overview}</p>
          <p className="season-info">
            {season.name} ({new Date(season.airDate).getFullYear()}) | {episodes?.length} episódios
          </p>
        </div>
      </ContentHero>

      <Section title='Episódios'>
        <EpisodeContainer>
          {episodes?.map((episode) => (
            <li key={episode.id}>
              <img src={tmdbImage(episode.stillPath) || rajEpisode} alt="" />

              <div className="informations">
                <p className="title">{episode.name}</p>
                <p className="description">
                  {episode.overview}
                </p>
                <div className="footer-episode">
                  <p>Episódio {episode.episodeNumber}</p>
                  <p>{formatDate(episode.airDate)}</p>
                </div>
              </div>
            </li>
          ))}
        </EpisodeContainer>
      </Section>
    </>
  );
}
