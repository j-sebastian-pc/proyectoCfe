import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = formData;
    try {
      const response = await fetch('http://localhost:8080/tuCafe/v1/client/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        toast.success('¡Inicio de sesión exitoso!');
      } else {
        toast.error('Inicio de sesión fallido. Verifica tus credenciales.');
      }
    } catch (error) {
      console.error('Error al conectar con el backend', error);
      toast.error('Error al conectar con el backend');
    }
  };

  return (
    <div className="book1">
      <h2 className="heading">Iniciar Sesión</h2>
      <form className='formL reserva-f' onSubmit={handleSubmit}>
        <label htmlFor="loginUsername" className="boxUS">
          Usuario:
          <input
            type="text"
            id="loginUsername"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="box1"
          />
        </label>

        <label htmlFor="loginPassword" className="boxUS">
          Contraseña:
          <input
            type="password"
            id="loginPassword"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="box1"
          />
        </label>

        <button type="submit" className="btn">
          Iniciar Sesión
        </button>
      </form>
      <div className='registro'>
        ¿No tienes una cuenta?{' '}
        <Link to="/signup">
          <u><b>Regístrate aquí!</b></u>
        </Link>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default Login;
