import { Film } from '../../interfaces';
import { tmdbImage } from '../../utils';
import { Container, ContainerImage } from './Styles';

import rajPoster from '../../assets/rajPosterPath.jpg';

interface CardProps{
  film: Film
  type?: 'catalog' | 'section'
  onClick: () => void
}

export function Card({film, type = 'section' ,onClick}: CardProps){
  return (
    <Container
      onClick={onClick}
      type={type}
    >
      <ContainerImage>
        <img src={tmdbImage(film.posterPath) || rajPoster} alt="" />
      </ContainerImage>

      <div className="overlay">
        <div className="content">
          <h3>{film.title} {film.releaseDate && `(${new Date(film.releaseDate).getFullYear()})`}</h3>
        </div>
      </div>
    </Container>
  );
}
