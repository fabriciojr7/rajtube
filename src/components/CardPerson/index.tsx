import { Cast } from '../../interfaces';
import { tmdbImage } from '../../utils';
import { Container } from './Styles';

import rajProfilePath from '../../assets/rajProfilePath.jpg';

interface CardPersonProps{
  cast: Cast
}

export function CardPerson({cast}: CardPersonProps){
  return (
    <Container>
      <img src={tmdbImage(cast.profilePath) || rajProfilePath} alt="" />

      <div className="overlay">
        <div className="content">
          <h3>{cast.name}</h3>
          <p>{cast.characterName}</p>
        </div>
      </div>
    </Container>
  );
}
