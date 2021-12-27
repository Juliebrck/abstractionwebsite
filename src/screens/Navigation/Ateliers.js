import React, { useState, useEffect } from "react";
import "./Navigation.css";
import { connect } from "react-redux";
import { Row } from "reactstrap";
import { Link } from 'react-router-dom';
import Layout from "antd/lib/layout/layout";
import Header from "../Header";
import Footer from "../Footer.js";

function Ateliers() {

    return (
        <Layout fluid style={styles.container}>
            <img style={styles.ginkobias} width="340px" src="./ginko.png" alt="ginko" />
            <Row style={{ width: "100vw" }}>
                <Header title={"ATELIERS"} />
            </Row>
            <Row style={{ width: "100vw" }}>
                <div style={{ height: "100vh", width: "100vw" }}>
                    <div class="calendly-inline-widget" data-url="https://calendly.com/abstractionparis/atelier-decouverte?background_color=ffffff&text_color=1b1a18&primary_color=1b1a18" style={{ minWidth: "320px", height: "100vh", marginTop: "-4vh" }}></div>
                </div>
            </Row>
            <Footer />
        </Layout>
    );
}

export default connect(null, null)(Ateliers);

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