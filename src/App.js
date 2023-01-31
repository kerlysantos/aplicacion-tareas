import tareas from './imagenes/tareas.png';
import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';
import { AiFillApple } from "react-icons/ai";


function App() {
  return (
    <div className="aplicacion-tareas">
  
      <div className='logo-de-tareas-contenedor'> 
      <div class="spinner">
    <div class="spinner1">
      </div>
</div>
        <img
        src= {tareas}
        className ='logo-tareas' />
      </div>
      
      <div className='tareas-listas-principal'>
        <h1>  Mis Tareas Pendientes 
          <AiFillApple/>
        </h1>
        <ListaDeTareas />
     
      </div>
    </div>
  );
}

export default App;