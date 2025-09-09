import React from "react";
import "./Rowcontainer.css";

export default function Rowcontainer({ children }) {
  return (
    <div className="row-container"
      /*style={{
        display: "flex",
        flexWrap: "wrap",         // permite salto de línea
        justifyContent: "center", // centra horizontalmente
        alignItems: "center",     // centra verticalmente
        maxWidth: `${52 * 6}px`,  // 5 cuadrados de 52px cada uno
        margin: "0 auto",         // centra el contenedor mismo
        gap: "8px",   
        height: "100vh",            // espacio entre componentes
      }}*/
    >
      {children}
    </div>
  );
}
