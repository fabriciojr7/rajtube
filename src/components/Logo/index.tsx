import { Container } from './styles';

interface LogoProps {
  onClick?: () => void
}

export function Logo({onClick} : LogoProps){
  return (
    <Container onClick={onClick}>
      <h1>
        Raj<span>Tube</span>
      </h1>
    </Container>
  );
}
