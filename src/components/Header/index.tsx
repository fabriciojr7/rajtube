import { List, X } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Logo } from '../Logo';
import { Container, MenuMobile } from './styles';

export function Header(){
  const [pathName, setPathName] = useState('');
  const location = useLocation();
  const [menuOpened, setMenuOpened] = useState(false);
  const navigate = useNavigate();

  const getMenuActive = (path: string) => {
    if(path === pathName){
      return 'active';
    }
  };

  const handleMenuOpened = () => {
    setMenuOpened(prevState => !prevState);
  };

  const handleNavigate = (link: string) => {
    navigate(link);
    setMenuOpened(false);

    window.scrollTo({
      top: 0
    });
  };

  useEffect(() => {
    setPathName(location.pathname);
  }, [location.pathname]);

  return (
    <Container opened={menuOpened}>
      <Logo onClick={() => handleNavigate('/')}/>

      <MenuMobile opened={menuOpened}>
        <List className='menu-open' onClick={handleMenuOpened}/>
        <X className='menu-close' onClick={handleMenuOpened}/>
      </MenuMobile>

      <nav>
        <span className={getMenuActive('/movies')} onClick={() => handleNavigate('/movies')}>Filmes</span>
        <span className={getMenuActive('/tv')} onClick={() => handleNavigate('/tv')}>Séries</span>
        <span className={getMenuActive('/search')} onClick={() => handleNavigate('search')}>Pesquisar</span>
      </nav>
    </Container>
  );
}
