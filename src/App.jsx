
 import { library } from "@fortawesome/fontawesome-svg-core";
 import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { Routes, Route } from "react-router-dom";


import Header from "./Components/Header/Header";

import AzaharCoffee from "./Components/Establecimiento/AzaharCoffee/AzaharCoffee";
import Cafe1760 from "./Components/Establecimiento/Cafe1760/Cafe1760";
import CafeSorrento from "./Components/Establecimiento/CafeSorrento/CafeSorrento"
import Deltorocafe from "./Components/Establecimiento/Deltorocafe/Deltorocafe"
import GardenCafe from "./Components/Establecimiento/GardenCafe/GardenCafe"
import LaCabraLoca from "./Components/Establecimiento/LaCabraLoca/LaCabraLoca"

import Footer from "./Components/Footer/Footer";
import Nosotros from "./Components/Nosotros/Nosotros";
import Cafes from "./Components/Cafes/Cafes";
import Opiniones from "./Components/Opiniones/Opiniones";
import Reserva from "./Components/Reserva/Reserva";
import Inicio from "./Components/Inicio/Inicio"
import Login from "./LogIn";
import SignUp from "./SingUp";
import { useState } from "react";



library.add(faMugHot);

function App() {
  return (
    <>
    <Header />
    <div>
      <Routes>
        <Route path="/" element={<Inicio /> } />
        <Route path="/lugares" element={<Cafes />} />
        <Route path="/Acerca" element={<Nosotros />} />
        <Route path="/opiniones" element={<Opiniones />} />
        <Route path="/reserva" element= {<Reserva />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cafes/AzaharCoffee" element={<AzaharCoffee/>} /> 
        <Route path="/cafes/Cafe1760" element={<Cafe1760 />} /> 
        <Route path="/cafes/CafeSorrento" element={<CafeSorrento/>} />
        <Route path="/cafes/Deltorocafe" element={<Deltorocafe />} />
        <Route path="/cafes/GardenCafe" element={<GardenCafe />} />
        <Route path="/cafes/LaCabraLoca" element={<LaCabraLoca />}  />
      </Routes>
      <Footer />
    </div>
    </>
  );
}

export default App;
