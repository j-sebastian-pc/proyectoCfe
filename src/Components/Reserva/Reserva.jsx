
function Book() {
  return (
    <section className="book" id="book">
      <h1 className="heading">Reserva <span>tu lugar Favorito</span></h1>
      <form action="">
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
  );
}

export default Book;
