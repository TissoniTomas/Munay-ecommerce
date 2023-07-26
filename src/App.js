import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import { Navbar, ItemDetailContainer, ItemListContainer } from './components';

function App() {
  return (
    <div className="h-full">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<ItemListContainer />}></Route>
        <Route exact path='/categoria/productos' element={<ItemListContainer />}></Route>
        <Route exact path='/productos/:id' element={<ItemDetailContainer/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
