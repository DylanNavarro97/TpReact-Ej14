import React from "react";
import {Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Inicio() {
  return (
    <section className="mainSection">
      <Container fluid className="my-4">
        <h2 className="mb-3">Recetas disponibles</h2>
        <div className="row">
          <div className="col-md-4 col-lg-2 mb-3">
            {/* Aca va el map de las cards */}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Inicio;
