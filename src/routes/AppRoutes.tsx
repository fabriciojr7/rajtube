import { Route, Routes } from 'react-router-dom';
import { DetailFilm } from '../pages/DetailFilm';
import { Season } from '../pages/Season';

import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { Search } from '../pages/Search';
import { Series } from '../pages/Series';

export function AppRoutes(){
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/tv' element={<Series/>}/>
      <Route path='/search' element={<Search/>}/>

      <Route path='/movie/:id' element={<DetailFilm mediaType='movie'/>}/>
      <Route path='/tv/:id' element={<DetailFilm mediaType='tv'/>}/>
      <Route path='/tv/:id/season/:seasonNumber' element={<Season/>}/>
    </Routes>
  );
}
