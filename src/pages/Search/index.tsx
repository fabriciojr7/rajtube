import { useState, useRef } from 'react';
import { Catalog } from '../../components/Catalog';
import { Container, SearchContainer } from './styles';
import { debounce } from 'lodash';


export function Search(){
  const [searchInput, setSearchInput] = useState('');

  const delayQuery = useRef(
    debounce(e => {
      setSearchInput(e);
    }, 500)
  ).current;

  function handleSearchInput(e: React.ChangeEvent<HTMLInputElement>){
    delayQuery(e.target.value);
  }

  return (
    <Container>

      <SearchContainer>
        <input
          type="text"
          placeholder='Pesquise no RajTube'
          onChange={handleSearchInput}
        />
      </SearchContainer>

      <Catalog type='search' query={searchInput}/>
    </Container>
  );
}
