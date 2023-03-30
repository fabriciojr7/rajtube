import { Container } from './styles';
import PropagateLoader from 'react-spinners/PropagateLoader';
import { Logo } from '../Logo';


export function Loader(){
  return (
    <Container>
      <div className="logo">
        <Logo />
      </div>
      <PropagateLoader color='#9a0a11' />
    </Container>
  );
}
