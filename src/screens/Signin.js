import React, { useState, useEffect } from "react";
import "../App.css";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Container, Col, Row, Input, Button } from "reactstrap";
import Layout from "antd/lib/layout/layout";
import Header from "./Header";
import Footer from "./Footer.js";

function Signin(props) {


    return (
        <Layout fluid style={styles.container}>
            <img style={styles.ginkobias} width="340px" src="./ginko.png" alt="ginko" />
            <Row style={{ width: "100vw" }}>
                <Header title={"SIGN IN/UP"} />
            </Row>
            <Row style={{ width: "100vw" }}>
                <div style={{ width: "70vw", height: "74vh", marginTop: "5vh", display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "flex-start" }}>
                    <div style={{ ...styles.textContainer, width: "30vw" }}>
                        <span style={styles.title}>Créez votre compte</span>
                        <span style={styles.subtitle}>Nom*</span>
                        <Input style={styles.input}></Input>
                        <span style={styles.subtitle}>Prénom*</span>
                        <Input style={styles.input}></Input>
                        <span style={styles.subtitle}>Email*</span>
                        <Input style={styles.input}></Input>
                        <span style={styles.subtitle}>Mot de passe*</span>
                        <Input style={styles.input}></Input>
                        <span style={styles.subtitle}>Téléphone</span>
                        <Input style={styles.input}></Input>
                        <Button style={styles.button}>M'INSCRIRE</Button>

                    </div>
                    <div style={{ ...styles.textContainer, width: "30vw" }}>
                        <span style={styles.title}>Vous avez déjà un compte ?</span>
                        <span style={styles.subtitle}>Email*</span>
                        <Input style={styles.input}></Input>
                        <span style={styles.subtitle}>Mot de passe*</span>
                        <Input style={styles.input}></Input>
                        <Button style={styles.button}>ME CONNECTER</Button>
                    </div>
                </div>
            </Row>

            <Footer />

        </Layout>
    );
}


export default connect(null, null)(Signin);

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
        flexDirection: "column",
        justifyContent: "center",
        /* alignItems: "center", */
        backgroundColor: "white",
        borderRadius: "20px",
        padding: "30px",
        fontFamily: "beau",
        fontSize: "18px",
        lineHeight: "30px",
        paddingRight: "40px",
        paddingLeft: "40px"

    },
    title: {
        fontSize: '20px',
        fontWeight: 600,
        marginBottom: "3vh",
    },
    subtitle: {
        fontSize: '14px',
    },
    textmenu: {
        fontSize: '14px',
        marginBottom: "30px",
        marginTop: "30px"
    },
    button: {
        backgroundColor: "#1b1a18",
        fontFamily: "avenir",
        fontSize: "10px",
        fontWeight: 800,
        marginTop: "1vh",
    },
    input: {
        borderRadius: 4,
        marginBottom: "10px",
        height: "3.5vh"
    },
    ginkobias: {
        position: "absolute",
        marginLeft: "75vw",
        marginTop: "-8vh",
        position: "absolute",
        zIndex: 2,
        opacity: 0.6,
        transform: "rotate(-160deg)"
    },
}