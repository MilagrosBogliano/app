import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting='Hola Soy ItemListContainer'/>
      <ItemCount stock = "5" initial = "1" />
    </div>
  );
}

export default App;
