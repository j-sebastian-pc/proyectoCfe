import {  NavLink } from 'react-router-dom';
import { cafes } from "../Conts/Conts.js";


function Cafes() {
  return (
    <section className="menu" id="menu">
      <h1 className="heading">Lugares mas populares</h1>

      <div className="box-container">
       
      {
        cafes.map((cafe,index) =>{
          return(
            
        <div className="box" key = {index}> 
          
        <div className="content">
          <h3>{cafe.titulo}</h3>
          <br />
          <div className="image-gallery">
            <img src ={cafe.imagen} alt="" />
          </div>
          <p>{cafe.mensaje}</p>
          <NavLink to={cafe.ruta} className="btn-link">
        <button className="btn">Ver más</button>
        </NavLink>
        </div>
        </div>
          )
        
      })
    }    
      </div>
    </section>
  );
}

export default Cafes;
