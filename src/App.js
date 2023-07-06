import './App.css';
import ItemListContainer from './components/ItemListContainer.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="BIENVENIDO A MI ECOMMERCE"/>
    </div>
  );
}

export default App;
