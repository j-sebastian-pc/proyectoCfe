import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    const { email, name, password } = formData;
    try {
      const response = await fetch('http://localhost:8080/tuCafe/v1/client/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        toast.success('¡Registro exitoso! Redirigiendo al inicio de sesión.');
        setTimeout(() => {
          // Redirigir aquí si es necesario
        }, 8000); // Redirigir después de 8 segundos
      }
    } catch (error) {
      console.error('Error al conectar con el backend', error);
    }
  };

  return (
    <div className="book1">
      <h2 className="heading">Registrar</h2>
      <form className='formL reserva-f' onSubmit={handleSubmit}>
        <label htmlFor="signupUsername" className="boxUS">
          Usuario:
          <input
            type="text"
            id="signupUsername"
            name="name"
            value={formData.username}
            onChange={handleChange}
            className="box1"
          />
        </label>

        <label htmlFor="signupEmail" className="boxUS">
          Correo electrónico:
          <input
            type="email"
            id="signupEmail"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="box1"
          />
        </label>

        <label htmlFor="signupPassword" className="boxUS">
          Contraseña:
          <input
            type="password"
            id="signupPassword"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="box1"
          />
        </label>

        <button type="submit" className="btn">
          Registrar
        </button>
      </form>
      <div className='registro'>
        ¿Ya tienes una cuenta?{' '}
        <Link to="/login">
          <u><b>Inicia sesión aquí</b></u>
        </Link>
      </div>
      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  );
};

export default SignUp;
