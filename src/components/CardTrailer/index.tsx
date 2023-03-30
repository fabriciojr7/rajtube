import { Trailer } from '../../interfaces';
// import { Container, ContainerImage } from './Styles';
import { Container } from './Styles';
// import { YoutubeLogo } from 'phosphor-react';
// import { youtubeThumbnail } from '../../utils';

interface CardTrailerProps{
  trailer: Trailer
}

export function CardTrailer({trailer}: CardTrailerProps){

  return (
    <Container
      src={`https://www.youtube.com/embed/${trailer.key}`}
    />
  );
}

{/* <iframe width="420" height="315"
        src={`https://www.youtube.com/embed/${trailer.key}`}>
      </iframe> */}

{/*
      <ContainerImage>
        <img src={youtubeThumbnail(trailer.key)} alt="" />
      </ContainerImage>

      <div className="overlay">
        <div className="icon">
          <YoutubeLogo size={48} color='#fff' />
        </div>
      </div> */}
// </Container>

// https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1


