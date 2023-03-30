import { PlayCircle } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import { Film } from '../../interfaces';
import { tmdbImage } from '../../utils';
import { useGlobalContext } from '../App';
import { Container, ContainerImage, Content } from './styles';

interface BannerHeroProps{
  film: Film
}

export function BannerHero({film}: BannerHeroProps){
  const globalContext = useGlobalContext();
  const navigate = useNavigate();

  return (
    <Container>
      <ContainerImage>
        <div className='overlay'></div>
        <img src={tmdbImage(film.coverPath)} alt="" />
      </ContainerImage>

      <Content>
        <p className='title'>{film.title}</p>
        <p className='description'>{film.description}</p>

        <ul className='genres'>
          {film.genreIds.map((genreId, index) => (
            <li key={index}>{
              globalContext.genres[film.mediaType].find(
                (genre) => genre.id === genreId
              )?.name
            }</li>
          ))}
        </ul>


        <div className="bottom">
          <button
            onClick={() => navigate(`/${film.mediaType}/${film.id}`)}
          >
            <PlayCircle size={24} color="#d4d4d8" />
            Ver Detalhes
          </button>
        </div>
      </Content>
    </Container>
  );
}
