import React from "react";

// Creamos una plantilla por defecto para poder recorrer nuestras
// vistas o paginas sobre un mismo layout o diseño, (Opcional)

const LayoutComponent = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center mt-1 bg-white">
      {children}
    </div>
  );
};

export default LayoutComponent;
