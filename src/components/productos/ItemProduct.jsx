import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { fetchDelete, fetchPut } from "../../logic/ApiHelper";

const ItemProducto = ({ id, nombre, precio, photo, categoria }) => {
  const navigate = useNavigate();

  const deleteProduct = (id) => {
    fetchDelete("https://kaoxdc.pythonanywhere.com/api/producto/", id).then(
      (response) => {
        response
          ? navigate("/productos")
          : alert("No se pudo eliminar este producto");
      }
    );
  };

  const updateProduc = () => {
    fetchPut("https://kaoxdc.pythonanywhere.com/api/producto/", )
  };


  return (
    <div className="mt-10 bg-orange-50 p-4  flex-1 flex-co rounded-lg shadow-lg">
      <img src={photo} alt="" className="w-60 h-20 object-cover rounded-lg" />
      <h1 className="mt-6 text-center text-red-950 font-bold">{nombre}</h1>
      <p className="text-center font-medium mt-6">$ {precio}</p>
      <button className="text-red-950 bg-orange-300 rounded-lg p-2 mt-6 w-full">
        <NavLink to={`/Producto/${id}`}>Detalle</NavLink>
      </button>
      <button
        onClick={() => deleteProduct(id)}
        className="w-full mt-4 p-2 shadow-lg rounded-lg text-red-950 bg-orange-500"
      >
        Eliminar
      </button>

      <button
        onClick={() => updateProduc()}
        className="w-full mt-4 p-2 shadow-lg rounded-lg text-red-950 bg-orange-300"
      >
        Modidificar
      </button>
    </div>
  );
};

export default ItemProducto;
