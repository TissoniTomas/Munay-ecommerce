import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import {
  Navbar, ItemDetailContainer, ItemListContainer, Home, AboutUs, Contact, CartWidget,
} from './components';

function App() {
  return (
    <div className="h-full sm:px-[5rem]">
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route exact path='/' element={<Home />}></Route>
              <Route exact path='/' element={<Home />}></Route>
              <Route exact path='/categoria/nosotros' element={<AboutUs />}></Route>
              <Route exact path='/categoria/contacto' element={<Contact />}></Route>
              <Route exact path='/categoria/productos/' element={<ItemListContainer />}></Route>
              <Route exact path='/categoria/productos/:id' element={<ItemListContainer />}></Route>
              <Route exact path='/productos/:id' element={<ItemDetailContainer />}></Route>
              <Route exact path='/carrito' element={<CartWidget />}></Route>
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
