import { Form, Button } from "react-bootstrap";


const FormularioRecetas = () => {

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Nueva Receta</h1>
      <hr />
      <Form className="my-4">
        <Form.Group className="mb-3" controlId="formNombreReceta">
          <Form.Label>Receta*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Escriba aquí el nombre de su receta"
          />
          <Form.Text className="text-danger">
            prueba de error
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/algunaFotoDelPlatoTerminado/"
          />
          <Form.Text className="text-danger">
        prueba de error
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoría*</Form.Label>
          <Form.Select>
            <option value="">Seleccione una opcion</option>
            <option value="Sopas">Sopas</option>
            <option value="Carnes">Carnes</option>
            <option value="Pastas">Pastas</option>
            <option value="Salsas">Salsas</option>
            <option value="Ensaladas">Ensaladas</option>
          </Form.Select>
          <Form.Text className="text-danger">
          prueba de error
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Descripción breve*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Vacío a la plancha."
            as="textarea"
          />
          <Form.Text className="text-danger">
        prueba de error
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Descripción Amplia*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: El vacio a la plancha es un plato clásico de la cocina argentina que destaca por su sencillez y delicioso sabor. Consiste en una pieza de carne de vacuno, típicamente vacío (también conocido como matambre), que se cocina a la plancha."
            as="textarea"
          />
          <Form.Text className="text-danger">
        prueba de error
          </Form.Text>
        </Form.Group>
        
        <Button type="submit" variant='success'>
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default FormularioRecetas;
