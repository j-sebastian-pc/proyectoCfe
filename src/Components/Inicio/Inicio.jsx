
import { NavLink } from 'react-router-dom';
import { cafes } from '../Conts/Conts';
const About = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="row">
          <div className="content">
            <h3 className="letra">
              Tu guía definitiva para descubrir los mejores lugares de café y cafeterías en el encantador Quindío.
            </h3>
            <a href="#menu" className="btn-about">
              Cafeterías en el <br /> encantador Quindío
            </a>
          </div>

          <div className="image">
            <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/tn273iuby9xxzjvar07k" className="main-home-image" alt="" />
          </div>
        </div>

        <div className="image-slider">
          <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/tn273iuby9xxzjvar07k" alt="" />
          <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/rdvteijamuubi7movsux" alt="" />
          <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/prrh7u9m6wczw928mmwo" alt="" />
        </div>
      </section>

      
        {/* en esta parte esta el codigo de cafes */}
      
      
        <section className="menu" id="menu">
        <h1 className="heading">Lugares más populares</h1>

        <div className="box-container">
       
       {
         cafes.map((cafe,index) =>{
           return(
             
         <div className="box" key = {index}> {/* segundo casilla del cafe */}
           
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
     )})
   }
    </div>
      </section>

  {/* comentario de las personas */}

      <section className="about" id="about">
      <h1 className="heading">Acerca de nosotros <span>por qué elegirnos</span></h1>
      <div className="row">
        <div className="image">
          <img src="image/persona.webp" alt="" />
        </div>
        <div className="content">
          <h3 className="title">¡Lo que nos hace especiales!</h3>
          <p>
            Bienvenidos a <b>Tu Café</b> . Somos un equipo apasionado de amantes del café y viajeros locales comprometidos en ayudarte a explorar la rica cultura cafetera de esta región.
            <br />
            Nuestra misión es brindarte una experiencia única alrededor del café, destacando los rincones más acogedores y auténticos en los pueblos del Quindío. Entendemos que el café es más que una bebida; es una historia que conecta personas, lugares y tradiciones. A través de nuestra plataforma, queremos compartir contigo la magia que se encuentra en cada taza y en cada rincón de esta hermosa tierra cafetera.
          </p>
          <div className="icons-container">
            <div className="icons">
              <img src="image/about-icon-1.png" alt="" />
              <h3>café de calidad</h3>
            </div>
            <div className="icons">
              <img src="image/about-icon-2.png" alt="" />
              <h3>Lugares de alta Calidad</h3>
            </div>
           
          </div>
        </div>
      </div>
    </section>

    {/* " QUIENE SOMOS "" */}

    <section className="review" id="review">
      <h1 className="heading">Opiniones <span>Lo que Dicen los Clientes</span></h1>

      <div className="swiper review-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide box">
           
          <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/iltlvdwpu7rfjsxhs78c" alt="" />
            <div className="stars">
              
            </div>
            <p>sit amet, consectetur adipisicing elit. Quo, earum quis dolorem quaerat tenetur illum.</p>
            <h3>John Doe</h3>
            <span>Satisfied Client</span>
          </div>

          <div className="swiper-slide box">
            
          <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/ifdsxghyyadcpggqy1tm" alt="" />
            
            <p>sit amet consectetur adipisicing elit. Rerum optio quasi ut, illo ipsam assumenda.</p>
            <h3>John Doe</h3>
            <span>Satisfied Client</span>
          </div>

          <div className="swiper-slide box">
           
          <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/fnstz7ftrcldpbfeu57r" alt="" />
           
            <p>sit amet consectetur adipisicing elit. Eius asperiores aliquam hic quis! Eligendi, aliquam.</p>
            <h3>John Doe</h3>
            <span>Satisfied Client</span>
          </div>

          <div className="swiper-slide box">
            
          <img src="https://res.cloudinary.com/dsa9qormp/image/upload/f_auto,q_auto/v1/image/yoc39uejzlse2uzfppxd" alt="" />
            <p>sit amet consectetur adipisicing elit. Eligendi modi perspiciatis distinctio velit aliquid a.</p>
            <h3>John Doe</h3>
            <span>Satisfied Client</span>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>

    {/* en esta parte esta el codigo de reserva */}
    
    <section className="book" id="book">
      <h1 className="heading">Reserva <span>tu lugar Favorito</span></h1>
      <form action="" className='reserva-f'>
        <div className="search-bar1">
          <input type="text" id="search-input" placeholder="Buscar Lugar..." className="box" />
        </div>
        <input type="text" placeholder="Nombre" className="box" />
        <input type="email" placeholder="Email" className="box" />
        <input type="number" placeholder="Contacto" className="box" />
        <textarea
          name=""
          placeholder="Mensaje"
          className="box"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <input type="submit" value="Enviar" className="btn" />
      </form>
    </section>
    </>
  );
};

export default About;
