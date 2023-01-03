//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


//componentes 
//import Comp1 from './components/Comp1'
import BarraNav from './components/navbar/Navbar'
import ItemsListContainer from './components/items/ItemsListContainer'


function App() {
  return (
    <>
      <BarraNav />  
      <ItemsListContainer mensaje1={"Hola"} mensaje2={"Mundo"} mensaje3={"????"}/>
     
  </>
  );
  
}

export default App;
