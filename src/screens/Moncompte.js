import React, { useState, useEffect } from "react";
import "../App.css";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Container, Col, Row, Input, Button, Table } from "reactstrap";
import { DeleteOutlined } from '@ant-design/icons';
import Layout from "antd/lib/layout/layout";
import Header from "./Header";
import Footer from "./Footer.js";

function Moncompte(props) {


    return (
        <Layout fluid style={styles.container}>
            <img style={styles.ginkobias} width="340px" src="./ginko.png" alt="ginko" />
            <Row style={{ width: "100vw" }}>
                <Header title={"MON COMPTE"} />
            </Row>
            <Row style={{ width: "100vw" }}>
                <div style={{ width: "85vw", height: "74vh", marginTop: "5vh", display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "flex-start" }}>
                    <div style={{ ...styles.textContainer, width: "30vw" }}>
                        <span style={styles.title}>Mes commandes</span>
                        <Table style={{ fontSize: "14px" }}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Date</th>
                                    <th>Statut</th>
                                    <th>Détails</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">453678</th>
                                    <td>28/12/21</td>
                                    <td>En cours</td>
                                    <td>Détails</td>
                                </tr>
                                <tr>
                                    <th scope="row">959234</th>
                                    <td>08/12/21</td>
                                    <td>Expédiée</td>
                                    <td>Détails</td>
                                </tr>
                                <tr>
                                    <th scope="row">897670</th>
                                    <td>14/11/21</td>
                                    <td>Annulé</td>
                                    <td>Détails</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div style={{ ...styles.textContainer, width: "50vw" }}>
                        <span style={styles.title}>Mon panier</span>
                        <Table style={{ fontSize: "14px" }}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Produit</th>
                                    <th>Format</th>
                                    <th>Coloris</th>
                                    <th>Quantité</th>
                                    <th>Prix</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">514</th>
                                    <td>Slow Burn Desire</td>
                                    <td>50 ml</td>
                                    <td>Marine</td>
                                    <td>1</td>
                                    <td>90 €</td>
                                    <td><DeleteOutlined /></td>
                                </tr>
                                <tr>
                                    <th scope="row">622</th>
                                    <td>White Spirit</td>
                                    <td>100 ml</td>
                                    <td>Rose</td>
                                    <td>1</td>
                                    <td>220 €</td>
                                    <td><DeleteOutlined /></td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <th scope="row">310 €</th>
                                    <td><Button style={styles.button}>{">"}</Button></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </Row>

            <Footer />

        </Layout>
    );
}


export default connect(null, null)(Moncompte);

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
    button: {
        backgroundColor: "#1b1a18",
        fontFamily: "avenir",
        fontSize: "14px",
        fontWeight: 800,
        marginTop: "1vh",
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