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
              required: "El nombre de la receta es obligatorio",
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

        <Form.Group className="mb-3" controlId="formCategoria">
          <Form.Label>Categoría*</Form.Label>
          <Form.Select
          {...register ("categoria", {
            required: "La categoría es obligatoria"
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

        <Form.Group className="mb-3" controlId="formDescripcionBreve">
          <Form.Label>Descripción breve de la receta*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Vacío a la plancha."
            as="textarea"
            {...register("descripcionBreve", {
              required: "La descripción breve es obligatoria",
              minLength: {
                value: 5,
                message: "Debe contener como mínimo 5 caracteres"
              },
              maxLength:{
                value: 50,
                message: "Debe contener como máximo 50 caracteres"
              }
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcionBreve?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescripcionCompleta">
          <Form.Label>Descripción paso a paso de la receta*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Condimenta los alimentos con sal, pimienta y hierbas, luego..."
            as="textarea"
            maxLength={500}
            {...register ("recetaCompleta", {
              required: "La descripción completa es obligatoria",
              minLength: {
                value: 15,
                message: "Debe contener como mínimo 15 caracteres"
              },
              maxLength: {
                value: 500,
                message: "Debe contener como máximo 500 caracteres"
              }
            })}
          />
          <Form.Text className="text-danger">
            {errors.recetaCompleta?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formListaIngredientes">
          <Form.Label>Lista de ingredientes*</Form.Label>
          <Form.Control
            type="text"
            placeholder={`Listar ingredientes separados por ","`}
            as="textarea"
            {...register("listaIngredientes", {
              required: "La lista de ingredientes es obligatoria",
              minLength: {
                value: 5,
                message: "Debe contener como mínimo 5 caracteres"
              },
              maxLength:{
                value: 50,
                message: "Debe contener como máximo 50 caracteres"
              }
            })}
          />
          <Form.Text className="text-danger">
            {errors.listaIngredientes?.message}
          </Form.Text>
        </Form.Group>

        <Button type="submit" variant="success">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default FormularioRecetas;
