import React from "react";

const VistaReceta = () => {
  return (
    <section className="container my-4 mainSection border border-success rounded">
      <div className="row ">
        <div className="col-lg-6 text-center my-3">
          <img
            src="https://imag.bonviveur.com/vacio-de-ternera-a-la-plancha.jpg"
            alt="imagen de corte de ternera a la plancha"
            className="vistaCard img-fluid "
          />
        </div>
        <div className="col-lg-6">
          <h2 className="my-3">Vacio de ternera a la plancha</h2>
          <hr />
          <p>
            El "vacío a la plancha" es un plato clásico de la cocina argentina
            que consiste en una pieza de carne de vacuno, típicamente vacío o
            matambre, cocinada a la plancha sin aderezos adicionales más que sal
            y pimienta. Se cocina a fuego alto para sellar los jugos y lograr un
            exterior dorado y crujiente, manteniendo la carne tierna y jugosa
            por dentro. Se puede disfrutar solo con acompañamientos simples como
            papas fritas, ensalada o chimichurri. Es popular en parrillas y
            asados argentinos, donde se aprecia la calidad de la carne y la
            experiencia de saborear un plato clásico de la gastronomía del país.
          </p>
          <h4 className="py-3">Categoría: Carnes</h4>
        </div>
        <div className="col-lg-12 ">
          <h2>Receta</h2>
          <p className="container">
            El "vacio de ternera a la plancha" es un delicioso plato argentino
            que destaca por su sencillez y su jugosidad. Aquí tienes una fácil
            receta: Ingredientes para 4 personas: 1 kg de vacío de ternera Sal
            Pimienta negra molida Pimentón dulce Ají argentino (opcional)
            Perejil fresco Tomillo fresco Romero fresco Ajo Cebolla Laurel
            Aceite de oliva Vinagre de manzana Vino tinto o blanco Preparación:
            Limpia el vacío de ternera, retirando membranas y exceso de grasa.
            Salpimienta la carne y condiméntala con pimentón, ají argentino,
            perejil, tomillo y romero. Añade ajo, cebolla, laurel, aceite,
            vinagre y vino. Deja marinar en la nevera durante 24 horas. Retira
            la carne de la marinada, sécala y déjala reposar 30 minutos. Asa la
            carne en una plancha caliente por ambos lados según el punto
            deseado. Deja reposar la carne durante 10 minutos antes de servir.
            Este plato delicioso y jugoso es ideal para compartir en una buena
            mesa con amigos y familiares. ¡Disfruta de esta exquisita receta
            argentina!
          </p>
        </div>
      </div>
    </section>
  );
};

export default VistaReceta;
