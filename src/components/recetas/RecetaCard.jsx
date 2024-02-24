import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function RecetaCard({ receta }) {
  return (
    <Card className="recetaCardContainer">
      <Card.Img
        variant="top"
        src="https://content-cocina.lecturas.com/medio/2022/09/06/paso_a_paso_para_hacer_cazuela_de_pescado_resultado_final_00000000_240213122756_600x600.jpg"
        className="recetaCardImg"
        alt="imagen de receta predeterminada"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className="text-end">
          <Link className="btn btn-primary">Ir a la receta</Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default RecetaCard;
