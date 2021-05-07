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
  ModalBody,
} from "reactstrap";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

function HomeScreen() {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  var movieMargin = {
    marginBottom: "8vh",
    marginTop: "4vh",
  };
  var container = {
    height: "100%",
    width: "95vw",
    maxWidth: "95vw",
    backgroundColor: "#1b1a18",
  };
  var card = {
    height: "73vh",
    color: "#fffef2",
    border: "none",
    backgroundColor: "#1b1a18",
    padding: 0,
  };
  var button = {
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: "#1b1a18",
    border: "#1b1a18",
    position: "sticky",
  };
  var cardbody = {
    paddingBottom: 0,
    //height: "50vh",
  };

  const skater = new Icon({
    iconUrl: "./logominres.png",
    iconSize: [25, 25],
    shadowSize: [0, 0],
  });

  return (
    <Container style={container}>
      <Row>
        <img
          className="logo3"
          width="300px"
          src="./titremastic.png"
          alt="logo abstraction"
          position="absolute"
        />
      </Row>
      <Row className="row">
        <Col xs="11" lg="5" xl="4">
          <Card style={card}>
            <CardBody style={cardbody}>
              <span class="number">01. </span>
              <Link
                class="titlelink"
                href="#"
                onClick={() =>
                  window.Calendly.initPopupWidget({
                    url:
                      "https://calendly.com/abstractionparis/atelierdecouverte?background_color=fffff2&text_color=1b1a18&primary_color=1b1a18",
                  })
                }
              >
                <span class="title">S'inscrire à un atelier </span>
              </Link>
              <p class="corpstext">
                <strong>Abstraction Paris</strong> vous propose, à travers des
                ateliers sur les matières premières, de vous initier à l'univers
                des parfums. Après une revue de l'histoire de la parfumerie,
                vous découvrirez les dessous de son industrie en terminant par
                une introduction aux matières premières qui composent la palette
                du parfumeur.{" "}
              </p>
              <CardFooter style={button}>
                <Link
                  class="calendlybutton"
                  href="#"
                  onClick={() =>
                    window.Calendly.initPopupWidget({
                      url:
                        "https://calendly.com/abstractionparis/atelierdecouverte?background_color=fffff2&text_color=1b1a18&primary_color=1b1a18",
                    })
                  }
                >
                  Réserver
                </Link>
              </CardFooter>
            </CardBody>
          </Card>
        </Col>
        <Col xs="11" lg="5" xl="4">
          <Card style={card}>
            <CardBody style={cardbody}>
              <span class="number">02. </span>
              <Link class="titlelink">
                <span class="title" onClick={onOpenModal}>
                  Nous découvrir
                </span>
              </Link>
              <p class="corpstext">
                <strong>Abstraction Paris</strong>
              </p>
              <p class="simpletext">22 rue Houdon, 75018 Paris</p>
              <p class="simpletext">Tél.: 06.71.59.17.33</p>
              <p class="simpletexttransparent">.</p>
              <p class="simpletext">
                <a class="lien" href="mailto:contact@abstractionparis.com">
                  contact@abstractionparis.com
                </a>
              </p>
              <p class="simpletext">@abstractionparis</p>
              <CardFooter style={button}>
                <button
                  onClick={onOpenModal}
                  class="calendlybutton"
                  style={{ marginTop: 0, border: "none" }}
                >
                  Nous trouver
                </button>
              </CardFooter>
            </CardBody>
          </Card>
        </Col>

        <Modal
          open={open}
          onClose={onCloseModal}
          center
          classNames={{
            modal: "customModal",
          }}
        >
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

        <Col xs="11" lg="5" xl="4">
          <Card style={card}>
            <CardBody style={cardbody}>
              <span class="number">03. </span>
              <Link
                href="mailto:contact@abstractionparis.com"
                class="titlelink"
              >
                <span class="title">Rester curieux</span>
              </Link>
              <p class="corpstext">
                Vous aimeriez en savoir plus? Gardez le contact avec l’équipe d’
                <strong>Abstraction Paris</strong> pour recevoir chaque mois des
                informations, sur les matières premières au fil des récoltes,
                sur le lancement de nos parfums et des évènements dans la
                boutique.<br></br>
                <br></br>A bientôt !
              </p>
              <CardFooter style={button}>
                <a href="mailto:contact@abstractionparis.com">
                  <button
                    class="calendlybutton"
                    style={{ marginTop: 0, border: "none" }}
                  >
                    Garder le contact
                  </button>
                </a>
              </CardFooter>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <p class="corpstext" style={{ marginTop: 0 }}>
          22 rue Houdon, 75018 Paris
        </p>
      </Row>
    </Container>
  );
}

export default HomeScreen;
