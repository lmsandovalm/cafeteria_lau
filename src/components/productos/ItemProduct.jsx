import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { fetchDelete, fetchPut } from "../../logic/ApiHelper";

const ItemProducto = ({ id, title, price, image, category }) => {
  const navigate = useNavigate();

  const deleteProduct = (id) => {
    fetchDelete("https://fakestoreapi.com/products", id).then(
      (response) => {
        response
          ? navigate("/products")
          : alert("No se pudo eliminar este producto");
      }
    );
  };

  const updateProduc = () => {
    fetchPut("https://fakestoreapi.com/products", )
  };


  return (
    <div className="mt-10 bg-orange-50 p-4  flex-1 flex-co rounded-lg shadow-lg">
      <img src={image} alt="" className="w-60 h-20 object-cover rounded-lg" />
      <h1 className="mt-6 text-center text-red-950 font-bold">{title}</h1>
      <p className="text-center font-medium mt-6">$ {price}</p>
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
        Modificar
      </button>
    </div>
  );
};

export default ItemProducto;
