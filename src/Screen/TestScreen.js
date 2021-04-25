import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  CardBody,
  Card,
  CardFooter,
  ButtonGroup,
  Modal,
  ModalBody,
} from "reactstrap";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";

function TestScreen() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  var movieMargin = {
    marginBottom: "8vh",
    marginTop: "4vh",
  };
  var container = {
    height: "100%",
    width: "95vw",
    maxWidth: "95vw",
    marginTop: "5vh",
    backgroundColor: "#1b1a18",

    //border: "0.5px solid #fffef2",
  };
  var card = {
    height: "75vh",
    color: "#fffef2",
    border: "none",
    backgroundColor: "#1b1a18",
  };
  var button = {
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: "#1b1a18",
    border: "#1b1a18",
  };
  var modalstyle = {
    color: "#fffef2",
    display: "flex",
    justifyContent: "center",
    marginTop: "20vh",
    border: "0.5px solid #fffef2",
    borderRadius: 10,
    padding: "10px",
  };

  const skater = new Icon({
    iconUrl: "./logominres.png",
    iconSize: [25, 25],
    shadowSize: [0, 0],
  });

  return (
    <div class="all">
      <img
        className="logo3"
        width="300px"
        src="./titremastic.png"
        alt="logo abstraction"
      />
      <Container style={container}>
        <Row className="row">
          <Col style={movieMargin} xs="10" lg="5" xl="4">
            <Card style={card}>
              <CardBody>
                <span class="number">01. </span>
                <span class="title">S'inscrire à un atelier </span>
                <p class="corpstext">
                  <strong>Abstraction Paris</strong>, à travers des ateliers sur
                  les matières premières, vous propose de vous initier à
                  l'univers des parfums. Après une revue de l'histoire de la
                  parfumerie, vous découvrirez les dessous de son industrie en
                  terminant par une introduction aux matières premières qui
                  composent la palette du parfumeur{" "}
                </p>
              </CardBody>
              <CardFooter style={button}>
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
              </CardFooter>
            </Card>
          </Col>
          <Col style={movieMargin} xs="10" lg="5" xl="4">
            <Card style={card}>
              <CardBody>
                <span class="number">02. </span>
                <span class="title">Nous découvrir</span>
                <p class="corpstext">
                  <strong>ABSTRACTION Paris</strong>
                </p>
                <p class="simpletext">22 rue Houdon, 75018 Paris</p>
                <p class="simpletext">Tél.: 06.13.05.14.67</p>
                <p class="simpletext">contact@abstractionparis.com</p>
                <p class="simpletext">@abstractionparis</p>
              </CardBody>
              <CardFooter style={button}>
                <button
                  onClick={toggle}
                  class="calendlybutton"
                  style={{ marginTop: 0, border: "none" }}
                >
                  Nous trouver
                </button>
              </CardFooter>
            </Card>
          </Col>

          <Modal isOpen={modal} toggle={toggle} style={modalstyle}>
            <MapContainer
              center={[48.8868058, 2.3430153]}
              zoom={14}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <link
                rel="stylesheet"
                href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
                integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
                crossorigin=""
              />
              <Marker
                style={{ fillrColor: "transparent" }}
                icon={skater}
                position={[48.8838213, 2.3390914]}
              ></Marker>
            </MapContainer>
          </Modal>

          <Col style={movieMargin} xs="10" lg="5" xl="4">
            <Card style={card}>
              <CardBody>
                <span class="number">03. </span>
                <span class="title">Rester curieux</span>
                <p class="corpstext">
                  Gardez le contact avec l’équipe d’Abstraction Paris pour
                  recevoir des informations sur les matières premières, au fil
                  des récoltes, sur le lancement de nos parfums et des
                  évènements dans la boutique
                </p>
              </CardBody>
              <CardFooter style={button}>
                <button
                  class="calendlybutton"
                  style={{ marginTop: 0, border: "none" }}
                >
                  Garder le contact
                </button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <p class="corpstext">22 rue Houdon, 75018 Paris</p>
        </Row>
      </Container>
    </div>
  );
}

export default TestScreen;
