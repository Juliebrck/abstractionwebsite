import React, { useState, useEffect } from "react";
import "./Navigation.css";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Container, Col, Row } from "reactstrap";
import { Link } from 'react-router-dom';
import { MenuOutlined, UserOutlined } from '@ant-design/icons';
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";

import Layout from "antd/lib/layout/layout";
import Header from "../Header";
import Footer from "../Footer.js";
//import { Col } from 'antd'


function Contact(props) {

    const skater = new Icon({
        iconUrl: "./logominres.png",
        iconSize: [25, 25],
        shadowSize: [0, 0],
    });

    return (
        <Layout fluid style={styles.container}>
            <img style={styles.ginkoright} width="340px" src="./ginko.png" alt="ginko" />
            <Row style={{ width: "100vw" }}>
                <Header title={"CONTACT"} />
            </Row>
            <Row style={{ width: "100vw" }}>
                <div style={{ width: "100vw", height: "80vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ ...styles.textContainer, height: "30vh", width: "80vw", zIndex: 1 }}>
                        <p style={{ textAlign: "center", lineHeight: "18px", fontWeight: 600 }}>
                            ABSTRACTION
                            <br></br>
                            Paris </p>
                        <p style={{ textAlign: "center", marginBottom: 0 }}>
                            06.13.05.14.67
                            <br></br>
                            contact@abstractionparis.com
                        </p>
                    </div>
                    <MapContainer
                        style={{ height: "40vh", width: "80vw", borderRadius: "20px", marginTop: "20px", border: "1px #1b1a18 solid" }}
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
                </div>
            </Row>
            <Footer />
        </Layout >
    );
}

function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: function () {
            dispatch({ type: "increase" });
        },
    };
}

export default connect(null, mapDispatchToProps)(Contact);

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
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: "20px",
        padding: "30px",
        fontFamily: "beau",
        fontSize: "18px",
        lineHeight: "30px",

    },
    ginkoright: {
        marginLeft: "80vw",
        marginTop: "-5vh",
        position: "absolute",
        zIndex: 2,
        opacity: 0.6,
        transform: "rotate(-160deg)"
    }
}