import React, { useState, useEffect } from "react";
import "./Navigation.css";
import { connect } from "react-redux";
import { Container, Col, Row } from "reactstrap";
import { Link } from 'react-router-dom';
import Layout from "antd/lib/layout/layout";
import Header from "../Header";
import Footer from "../Footer.js";

function Collectionmillesimee() {

    return (
        <Layout fluid style={styles.container}>
            <img style={styles.ginkobias} width="340px" src="./ginko.png" alt="ginko" />
            <Row style={{ width: "100vw" }}>
                <Header title={"MILLÉSIMÉS"} />
            </Row>
            <Row style={{ width: "100vw" }}>
                <div style={{ width: "70vw", height: "79vh", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                    <div className="perfumesquare" style={{ height: "200px", width: "200px", backgroundColor: "rgba(27, 26, 24, 0.4)", borderRadius: 45, border: "0.5px black solid", margin: "15px 35px 15px 35px", color: "#1b1a18", fontFamily: "beau", display: "flex", justifyContent: "center", alignItems: "center", }}>BLEU ROUGE</div>
                    <div className="perfumesquare" style={{ height: "200px", width: "200px", backgroundColor: "rgba(27, 26, 24, 0.4)", borderRadius: 45, border: "0.5px black solid", margin: "15px 35px 15px 35px", color: "#1b1a18", fontFamily: "beau", display: "flex", justifyContent: "center", alignItems: "center", }}>SLOW BURN DESIRE</div>
                    <div className="perfumesquare" style={{ height: "200px", width: "200px", backgroundColor: "rgba(27, 26, 24, 0.4)", borderRadius: 45, border: "0.5px black solid", margin: "15px 35px 15px 35px", color: "#1b1a18", fontFamily: "beau", display: "flex", justifyContent: "center", alignItems: "center", }}>WOMEN AND LEAVES</div>
                    <div className="perfumesquare" style={{ height: "200px", width: "200px", backgroundColor: "rgba(27, 26, 24, 0.4)", borderRadius: 45, border: "0.5px black solid", margin: "15px 35px 15px 35px", color: "#1b1a18", fontFamily: "beau", display: "flex", justifyContent: "center", alignItems: "center", }}>WHITE SPIRIT</div>
                    <div className="perfumesquare" style={{ height: "200px", width: "200px", backgroundColor: "rgba(27, 26, 24, 0.4)", borderRadius: 45, border: "0.5px black solid", margin: "15px 35px 15px 35px", color: "#1b1a18", fontFamily: "beau", display: "flex", justifyContent: "center", alignItems: "center", }}>SOMBRES MARGUERITES</div>
                    <div style={{ height: "200px", width: "200px", backgroundColor: "rgba(27, 26, 24, 0.4)", backgroundColor: "#1b1a18", backgroundSize: "contain", borderRadius: 25, border: "0.5px black solid", margin: "15px 35px 15px 35px", color: "#fffef2", fontFamily: "beau", display: "flex", justifyContent: "center", alignItems: "center", paddingLeft: "15px" }}>A chaque parfumeur son couple de parfums...</div>

                </div>
            </Row>

            <Footer />

        </Layout>
    );
}

export default connect(null, null)(Collectionmillesimee);

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