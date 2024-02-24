import error from "../../assets/error404.png"
import { Button } from "react-bootstrap";

const Error404 = () => {
    return (
        <section className="container">
            <img src={error} alt="imagen de error 404" />
            <div>
                <Button variant="primary">Volver al inicio</Button>
            </div>
        </section>
    );
};

export default Error404;