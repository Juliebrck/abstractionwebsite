import React, { useState, useEffect } from "react";
import "./Navigation.css";
import { connect } from "react-redux";
import { Container, Col, Row } from "reactstrap";
import { Link } from 'react-router-dom';
import Layout from "antd/lib/layout/layout";
import Header from "../Header";
import Footer from "../Footer.js";

function Partenaires() {

    const [ellipsisHover1, setEllispsisHover1] = useState(false);
    const [ellipsisHover2, setEllispsisHover2] = useState(false);
    const [ellipsisHover3, setEllispsisHover3] = useState(false);

    return (
        <Layout fluid style={styles.container}>
            <img style={styles.ginkobias} width="340px" src="./ginko.png" alt="ginko" />
            <img style={styles.ginkoright} width="340px" src="./ginko.png" alt="ginko" />
            <img style={styles.ginkoleft} width="340px" src="./ginko.png" alt="ginko" />
            <Row style={{ width: "100vw" }}>
                <Header title={"PARTENAIRES"} />
            </Row>
            <Row style={{ width: "100vw" }}>
                <div style={{ width: "100vw", height: "80vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <h2 style={{ fontFamily: "beau", fontStyle: "italic" }}>Conception et production<span style={{ fontWeight: 600 }}> 100% française </span></h2>
                    <div style={{ ...styles.textContainer, height: "50vh", width: "80vw", zIndex: 1, marginTop: "30px" }}>
                        <p >
                            <span style={{ textDecoration: "underline" }}>Abstraction Paris</span> est née d’une observation minutieuse de l’industrie de la parfumerie. La marque a pour vocation de proposer une gamme de parfums classiques et une gamme de parfums millésimés, ainsi que des ateliers « matières premières » permettant à sa clientèle d’appréhender l’univers des parfums avec davantage de connaissances.
                            <br></br><br></br>
                            Chez <span style={{ textDecoration: "underline" }}>Abstraction Paris</span>, la qualité et l’authenticité sont au coeur de nos valeurs. Elles se retrouvent tant dans le choix de nos parfumeurs et de nos partenaires que dans la sélection de nos matières premières. Nous travaillons en direct avec les meilleurs fournisseurs mondiaux et souhaitons faire la lumière sur les savoir-faire ancestraux de cette industrie auprès de notre clientèle.
                        </p>
                    </div>
                </div>
            </Row>
            <Row style={{ width: "100vw" }}>
                <div style={{ width: "70vw", height: "40vh", display: "flex", justifyContent: "space-around", alignItems: "center", }}>
                    {ellipsisHover1 ? <div onMouseLeave={() => setEllispsisHover1(false)} style={styles.ellipsisunder}>4 partenaires</div>
                        :
                        <div onMouseEnter={() => setEllispsisHover1(true)} style={styles.ellipsisabove}>PACKAGING</div>
                    }
                    {ellipsisHover2 ? <div onMouseLeave={() => setEllispsisHover2(false)} style={styles.ellipsisunder}>6 partenaires</div>
                        :
                        <div onMouseEnter={() => setEllispsisHover2(true)} style={styles.ellipsisabove}>BOUTIQUE</div>
                    }
                    {ellipsisHover3 ? <div onMouseLeave={() => setEllispsisHover3(false)} style={styles.ellipsisunder}>5 partenaires</div>
                        :
                        <div onMouseEnter={() => setEllispsisHover3(true)} style={styles.ellipsisabove}>MATIÈRES PREMIÈRES</div>
                    }
                </div>

            </Row>
            <Row style={{ width: "100vw" }}>
                <div style={{ width: "100vw", marginTop: "60px" }}>
                    <div style={{ width: "100vw", height: "1px", backgroundColor: "#1b1a18" }}></div>
                    <span style={{ ...styles.sectionTitle, marginLeft: "15vw" }}>PACKAGING</span>

                    <div style={{ width: "70vw", height: "90vh", display: "flex", justifyContent: "space-around", alignItems: "center", marginLeft: "15vw" }}>
                        <img style={{ zIndex: 1 }} width="400px" src="./packagingpartners.jpg" alt="Packaging partners" />
                        <div style={{ width: "30vw", height: "1px", backgroundColor: "#1b1a18" }}></div>
                        <img style={{ borderRadius: "20px", zIndex: 1 }} width="320px" src="./packaging.jpg" alt="Packaging" />
                    </div>
                </div>
                <div style={{ ...styles.textContainer, height: "30vh", width: "70vw", zIndex: 1 }}>
                    <p>
                        Abstraction Paris est née d’une observation minutieuse de l’industrie de la parfumerie. La marque a pour vocation de proposer une gamme de parfums classiques et une gamme de
                        parfums millésimés, ainsi que des ateliers « matières premières » permettant à sa clientèle d’appréhender l’univers des parfums avec davantage de connaissances.
                    </p>
                </div>
            </Row>
            <Row style={{ width: "100vw" }}>
                <div style={{ width: "100vw", marginTop: "60px" }}>
                    <div style={{ width: "100vw", height: "1px", backgroundColor: "#1b1a18" }}></div>
                    <span style={{ ...styles.sectionTitle, marginLeft: "65vw" }}>BOUTIQUE</span>

                    <div style={{ width: "70vw", height: "90vh", display: "flex", justifyContent: "space-around", alignItems: "center", marginLeft: "15vw" }}>
                        <img style={{ borderRadius: "20px", zIndex: 1 }} width="320px" src="./boutique.jpg" alt="Boutique" />
                        <div style={{ width: "30vw", height: "1px", backgroundColor: "#1b1a18" }}></div>
                        <img style={{ zIndex: 1 }} width="400px" src="./packagingpartners.jpg" alt="Boutique partners" />
                    </div>
                </div>
                <div style={{ ...styles.textContainer, height: "30vh", width: "70vw", zIndex: 1 }}>
                    <p>
                        Abstraction Paris est née d’une observation minutieuse de l’industrie de la parfumerie. La marque a pour vocation de proposer une gamme de parfums classiques et une gamme de
                        parfums millésimés, ainsi que des ateliers « matières premières » permettant à sa clientèle d’appréhender l’univers des parfums avec davantage de connaissances.
                    </p>
                </div>
            </Row>
            <Row style={{ width: "100vw", marginBottom: "8vh" }}>
                <div style={{ width: "100vw", marginTop: "60px" }}>
                    <div style={{ width: "100vw", height: "1px", backgroundColor: "#1b1a18" }}></div>
                    <span style={{ ...styles.sectionTitle, marginLeft: "15vw", width: "25vw" }}>MATIÈRES PREMIÈRES</span>

                    <div style={{ width: "70vw", height: "90vh", display: "flex", justifyContent: "space-around", alignItems: "center", marginLeft: "15vw" }}>
                        <img style={{ zIndex: 1 }} width="400px" src="./packagingpartners.jpg" alt="MP partners" />
                        <div style={{ width: "30vw", height: "1px", backgroundColor: "#1b1a18" }}></div>
                        <img style={{ borderRadius: "20px", zIndex: 1 }} width="320px" src="./mp.jpg" alt="Matières premières" />
                    </div>
                </div>
                <div style={{ ...styles.textContainer, height: "30vh", width: "70vw", zIndex: 1 }}>
                    <p>
                        Abstraction Paris est née d’une observation minutieuse de l’industrie de la parfumerie. La marque a pour vocation de proposer une gamme de parfums classiques et une gamme de
                        parfums millésimés, ainsi que des ateliers « matières premières » permettant à sa clientèle d’appréhender l’univers des parfums avec davantage de connaissances.
                    </p>
                </div>
            </Row>
            <Footer />

        </Layout>
    );
}

export default connect(null, null)(Partenaires);

const styles = {
    container: {
        minHeight: "100vh",
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
    textmenu: {
        fontSize: '14px',
        marginBottom: "30px",
        marginTop: "30px"

    },
    sectionTitle: {
        width: "15vw",
        textAlign: "center",
        position: "absolute",
        marginTop: "-3vh",
        fontSize: "24px",
        fontFamily: "beau",
        zIndex: 1,
        backgroundColor: "#fffef2",

    },
    ellipsisabove: {
        height: "240px",
        width: "240px",
        borderRadius: 150,
        backgroundColor: "#1b1a18",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fffef2",
        fontFamily: "beau",
        fontSize: 20,
    },
    ellipsisunder: {
        height: "240px",
        width: "240px",
        borderRadius: 150,
        backgroundColor: "#fffef2",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#1b1a18",
        fontFamily: "beau",
        fontSize: 20,
        border: "0.5px black solid"
    },
    ginkoright: {
        position: "absolute",
        marginLeft: "80vw",
        marginTop: "340vh",
        position: "absolute",
        zIndex: 2,
        opacity: 0.6,
        transform: "rotate(-90deg)"
    },
    ginkoleft: {
        position: "absolute",
        marginLeft: "-5vw",
        marginTop: "190vh",
        position: "absolute",
        zIndex: 2,
        opacity: 0.6,
        transform: "rotate(90deg)"
    },
    ginkobias: {
        position: "absolute",
        marginLeft: "80vw",
        marginTop: "0vh",
        position: "absolute",
        zIndex: 2,
        opacity: 0.6,
        transform: "rotate(-150deg)"
    },
}