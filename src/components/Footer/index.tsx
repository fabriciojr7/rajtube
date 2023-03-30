import { useNavigate } from 'react-router-dom';
import { Logo } from '../Logo';
import { Container } from './styles';

export function Footer(){
  const navigate = useNavigate();

  function handleNavigate(){
    navigate('/');
    window.scrollTo({
      top: 0
    });
  }

  return (
    <Container>
      <Logo onClick={handleNavigate}/>
      <span>By Fabrício Júnior (2023)</span>
    </Container>
  );
}
