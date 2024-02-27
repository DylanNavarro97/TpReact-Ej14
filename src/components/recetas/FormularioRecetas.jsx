import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const FormularioRecetas = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const recetaValidada = (receta) => {
    console.log(receta)
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Nueva Receta</h1>
      <hr />
      <Form className="my-4" onSubmit={handleSubmit(recetaValidada)}>
        <Form.Group className="mb-3" controlId="formNombreReceta">
          <Form.Label>Receta*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Escriba aquí el nombre de su receta"
            {...register("nombre", {
              required: "El nombre de la receta es obligatoria",
              minLength: {
                value: 2,
                message:
                  "El nombre de la receta debe tener como mínimo 2 caracteres",
              },
              maxLength: {
                value: 30,
                message:
                  "El nombre de la receta debe tener como maximo 30 caracteres",
              },
            })}
            maxLength={30}
          />
          <Form.Text className="text-danger">
            {errors.nombre?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/algunaFotoDelPlatoTerminado/"
            {...register("imagen", {
              required: "La imagen es obligatoria",
              pattern: {
                value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/,
                message: "Debe ingresar una URL valida (jpg|jpeg|gif|png)"
              }
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoría*</Form.Label>
          <Form.Select
          {...register ("categoria", {
            required: "La categoria es obligatoria"
          })}
          >
            <option value="">Seleccione una opción</option>
            <option value="Sopas">Sopas</option>
            <option value="Carnes">Carnes</option>
            <option value="Pastas">Pastas</option>
            <option value="Salsas">Salsas</option>
            <option value="Ensaladas">Ensaladas</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Descripción breve*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Vacío a la plancha."
            as="textarea"
          />
          <Form.Text className="text-danger">prueba de error</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Descripción Amplia*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: El vacio a la plancha es un plato clásico de la cocina argentina que destaca por su sencillez y delicioso sabor. Consiste en una pieza de carne de vacuno, típicamente vacío (también conocido como matambre), que se cocina a la plancha."
            as="textarea"
          />
          <Form.Text className="text-danger">prueba de error</Form.Text>
        </Form.Group>

        <Button type="submit" variant="success">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default FormularioRecetas;
