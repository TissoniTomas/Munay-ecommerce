import ItemListContainer from './components/ItemListContainer.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <div className="h-full">
      <Navbar />
      <ItemListContainer greeting="BIENVENIDO A MI ECOMMERCE"/>
    </div>
  );
}

export default App;
