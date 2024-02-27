import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const RegistroAdm = () => {
  return (
    <section className="container">
      <div className="card my-5 border border-success">
        <h3 className="card-header">Registro</h3>
        <Form className="container mb-4">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" minLength={3} maxLength={100} required/>
            <Form.Text className="text-muted">
            Nunca compartiremos su correo electrónico con nadie más.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" minLength={3} maxLength={30} required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPasswordRepeat">
            <Form.Label>Repetir Password</Form.Label>
            <Form.Control type="password" placeholder="Repetir Password" minLength={3} maxLength={30} required/>
          </Form.Group>

          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default RegistroAdm;
