import React, { useContext } from "react";
import Receta from "./Receta";
import { RecetasContext } from "../context/RecetasContext";

const ListaRecetas = () => {
  // extraer las recetas
  const { recetas } = useContext(RecetasContext);

  return (
    <div className="row mt-5">
      {recetas?recetas.map(receta => (
        <Receta key={receta.idDrink} receta={receta} />
      )):null}
    </div>
  );
};

export default ListaRecetas;
