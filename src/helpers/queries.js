// import { log } from "console";

const URL_Recetas = import.meta.env.VITE_API_RECETA;

export const crearRecetaAPI = async (recetaNueva) => {
  try {
    const respuesta = await fetch(URL_Recetas, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recetaNueva),
    });
    console.log(respuesta);
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const leerRecetasAPI = async () =>{
  try{
    const respuesta = await fetch(URL_Recetas);
    const listaRecetas = await respuesta.json();
    return listaRecetas
  }catch(error){
    console.log(error);
  }
}