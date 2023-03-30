import { Season } from '../../interfaces';
import { tmdbImage } from '../../utils';
import { Container, ContainerImage } from './Styles';

interface CardSeaonProps{
  season: Season
  onClick: () => void
}

export function CardSeason({season, onClick}: CardSeaonProps){
  return (
    <Container
      onClick={onClick}
    >
      <ContainerImage>
        <img src={tmdbImage(season.posterPath)} alt="" />
      </ContainerImage>

      <div className="overlay">
        <div className="content">
          <h3>{season.name}</h3>
        </div>
      </div>
    </Container>
  );
}
