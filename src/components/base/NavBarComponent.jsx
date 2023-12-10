import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";


const NavBarComponent = () => {
  return (
    <nav className="bg-orange-300 flex justify-start items-center top-0 z-10 w-full py-3 px-5 text-sm font-medium">
      <div className="flex justify-items-center h-20 gap-20">
        <img src={logo}/>
        <ul className="flex justify-between items-center gap-36">
          <li className="text-sm gap-36">
            <NavLink
              to="/inicio"
              className="text-orange-950 hover:text-orange-900"
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/productos"
              className="text-orange-950 hover:text-orange-900"
            >
              Productos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categorias"
              className="text-orange-950 hover:text-orange-900"
            >
              Categorías
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/usuarios"
              className="text-orange-950 hover:text-orange-900"
            >
              Usuarios
            </NavLink>
          </li>
          <li>
            <NavLink to="/perfil" 
            className="text-orange-950 hover:text-orange-900">
              Perfil
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBarComponent;
