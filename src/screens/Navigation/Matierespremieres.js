import React, { useState, useEffect } from "react";
import "./Navigation.css";
import { connect } from "react-redux";
import { Container, Col, Row } from "reactstrap";
import { Link } from 'react-router-dom';
import Layout from "antd/lib/layout/layout";
import Header from "../Header";
import Footer from "../Footer.js";

function Matierespremieres() {

    return (
        <Layout fluid style={styles.container}>
            <img style={styles.ginkobias} width="340px" src="./ginko.png" alt="ginko" />
            <Row style={{ width: "100vw" }}>
                <Header title={"MATIÈRES PREMIÈRES"} />
            </Row>
            <Row style={{ width: "100vw" }}>
                <div style={{ overflow: "scroll", width: "85vw", height: "71vh", marginLeft: "5vw", marginTop: "4vh", marginBottom: "4vh", display: "flex", flexDirection: "row"/* , justifyContent: "center" */, alignItems: "center", flexWrap: "wrap" }}>
                    <div className="perfumesquare" style={{ ...styles.mpbutton, backgroundImage: "url(./fleur.jpg)", backgroundSize: "contain" }}>AMBRE GRIS</div>
                    <div className="perfumesquare" style={{ ...styles.mpbutton, backgroundImage: "url(./fleur.jpg)", backgroundSize: "contain" }}>BENJOIN</div>
                    <div className="perfumesquare" style={{ ...styles.mpbutton, backgroundImage: "url(./fleur.jpg)", backgroundSize: "contain" }}>COUMARINE</div>
                    <div className="perfumesquare" style={{ ...styles.mpbutton, backgroundImage: "url(./fleur.jpg)", backgroundSize: "contain" }}>ENCENS</div>
                    <div className="perfumesquare" style={{ ...styles.mpbutton, backgroundImage: "url(./fleur.jpg)", backgroundSize: "contain" }}>FRANGIPANIER</div>
                    <div className="perfumesquare" style={{ ...styles.mpbutton, backgroundImage: "url(./fleur.jpg)", backgroundSize: "contain" }}>GIROFLÉE</div>
                    <div className="perfumesquare" style={{ ...styles.mpbutton, backgroundImage: "url(./fleur.jpg)", backgroundSize: "contain" }}>HÉLIOTROPE</div>
                    <div className="perfumesquare" style={{ ...styles.mpbutton, backgroundImage: "url(./fleur.jpg)", backgroundSize: "contain" }}>IRIS</div>
                    <div className="perfumesquare" style={{ ...styles.mpbutton, backgroundImage: "url(./fleur.jpg)", backgroundSize: "contain" }}>JASMIN</div>
                    <div className="perfumesquare" style={{ ...styles.mpbutton, backgroundImage: "url(./fleur.jpg)", backgroundSize: "contain" }}>LIMETTE</div>
                    <div className="perfumesquare" style={{ ...styles.mpbutton, backgroundImage: "url(./fleur.jpg)", backgroundSize: "contain" }}>MUSC</div>
                    <div className="perfumesquare" style={{ ...styles.mpbutton, backgroundImage: "url(./fleur.jpg)", backgroundSize: "contain" }}>NÉROLI</div>
                    <div className="perfumesquare" style={{ ...styles.mpbutton, backgroundImage: "url(./fleur.jpg)", backgroundSize: "contain" }}>PETIT GRAIN</div>
                    <div className="perfumesquare" style={{ ...styles.mpbutton, backgroundImage: "url(./fleur.jpg)", backgroundSize: "contain" }}>OEILLET</div>
                    <div className="perfumesquare" style={{ ...styles.mpbutton, backgroundImage: "url(./fleur.jpg)", backgroundSize: "contain" }}>SAFRAN</div>
                    <div className="perfumesquare" style={{ ...styles.mpbutton, backgroundImage: "url(./fleur.jpg)", backgroundSize: "contain" }}>VÉTIVER</div>
                </div>
            </Row >

            <Footer />

        </Layout >
    );
}

export default connect(null, null)(Matierespremieres);

const styles = {
    container: {
        height: "100vh",
        width: "100vw",
        paddingLeft: "0px",
        paddingRight: "0px",
        marginLeft: 0,
        marginRight: 0,
        backgroundColor: "#fffef2",
    },
    textContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: "20px",
        padding: "30px",
        marginTop: "-10px",
        fontFamily: "beau",
        fontSize: "18px",
        lineHeight: "30px",
        paddingRight: "40px",
        paddingLeft: "40px"

    },
    mpbutton: {
        height: "140px",
        width: "140px",
        backgroundColor: "rgba(27, 26, 24, 0.4)",
        borderRadius: 100,
        border: "0.5px black solid",
        margin: "8px 20px 8px 20px",
        color: "#1b1a18",
        fontFamily: "beau",
        fontWeight: 500,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    ginkobias: {
        position: "absolute",
        marginLeft: "80vw",
        marginTop: "-8vh",
        position: "absolute",
        zIndex: 2,
        opacity: 0.6,
        transform: "rotate(-160deg)"
    },
}