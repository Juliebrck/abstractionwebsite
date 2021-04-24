import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Container, Row, Col, CardBody, Card } from "reactstrap";
import { Modal, Button } from "antd";

function TestScreen() {
  var movieMargin = {
    marginBottom: 20,
    marginTop: "15vh",
  };
  var container = {
    height: "90vh",
    width: "95vw",
    maxWidth: "95vw",
    border: "0.5px solid #fffef2",
  };

  return (
    <div class="all">
      <Container style={container}>
        <Row className="row">
          <Col style={movieMargin} xs="10" lg="5" xl="4">
            <Card style={{ height: "70vh" }}>
              <CardBody>
                <div class="text">
                  <span class="number">01. </span>
                  <span class="title">S'inscrire à un atelier </span>
                  <p class="corpstext">
                    <strong>Abstraction Paris</strong>, à travers des ateliers
                    sur les matières premières, vous propose de vous initier à
                    l'univers des parfums. Après une revue de l'histoire de la
                    parfumerie, vous découvrirez les dessous de son industrie en
                    terminant par une introduction aux matières premières qui
                    composent la palette du parfumeur.{" "}
                  </p>
                  <Link
                    class="calendlybutton"
                    href="#"
                    onClick={() =>
                      window.Calendly.initPopupWidget({
                        url:
                          "https://calendly.com/abstractionparis/atelierdecouverte",
                      })
                    }
                  >
                    Réserver
                  </Link>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col style={movieMargin} xs="10" lg="5" xl="4">
            <Card style={{ height: "70vh" }}>
              <CardBody>
                <div class="text">
                  <span class="number">02. </span>
                  <span class="title">Nous découvrir</span>
                  <p class="corpstext">
                    <strong>ABSTRACTION Paris</strong>
                  </p>
                  <p class="simpletext">22 rue Houdon</p>
                  <p class="simpletext">75018 Paris</p>
                  <p class="simpletext">Tél.: 06.13.05.14.67</p>
                  <p class="simpletext">contact@abstractionparis.com</p>
                  <p class="simpletext">@abstractionparis</p>
                  <button
                    class="calendlybutton"
                    style={{ marginTop: 0, border: "none" }}
                  >
                    Nous trouver
                  </button>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col style={movieMargin} xs="10" lg="5" xl="4">
            <Card style={{ height: "70vh" }}>
              <CardBody>
                <div class="text">
                  <span class="number">03. </span>
                  <span class="title">Rester curieux</span>
                  <p class="corpstext">
                    Gardez le contact avec l’équipe d’Abstraction Paris pour
                    recevoir des informations sur les matières premières, au fil
                    des récoltes, sur le lancement de nos parfums et des
                    évènements dans la bouique
                  </p>
                  <button
                    class="calendlybutton"
                    style={{ marginTop: 0, border: "none" }}
                  >
                    Garder le contact
                  </button>
                  <div id="worldmap"></div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TestScreen;
