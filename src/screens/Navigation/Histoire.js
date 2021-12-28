import React, { useState, useEffect } from "react";
import "./Navigation.css";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Container, Col, Row } from "reactstrap";
import { Link } from 'react-router-dom';
import { MenuOutlined, UserOutlined } from '@ant-design/icons';
import Layout from "antd/lib/layout/layout";
import Header from "../Header";
import Footer from "../Footer.js";
//import { Col } from 'antd'


function Histoire(props) {


    return (
        <Layout fluid style={styles.container}>
            <div style={{ height: "20vh", width: "1px", backgroundColor: "#1b1a18", marginLeft: "30vw", marginTop: "85vh", position: "absolute" }}></div>
            <img style={styles.ginkoright} width="340px" src="./ginko.png" alt="ginko" />
            <Row style={{ width: "100vw" }}>
                <Header title={"HISTOIRE"} />
            </Row>
            <Row style={{ width: "100vw" }}>
                <div style={{ width: "100vw", height: "88vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <h2 style={{ fontFamily: "beau", fontStyle: "italic" }}>Sublimer les<span style={{ fontWeight: 600 }}> parfums </span>par le procédé du <span style={{ fontWeight: 600 }}>millésime</span></h2>
                    <div style={{ ...styles.textContainer, height: "60vh", width: "80vw", zIndex: 1 }}>
                        <p >
                            <span style={{ textDecoration: "underline" }}>Abstraction Paris</span> est née d’une observation minutieuse de l’industrie de la parfumerie. La marque a pour vocation de proposer une gamme de parfums classiques et une gamme de parfums millésimés, ainsi que des ateliers « matières premières » permettant à sa clientèle d’appréhender l’univers des parfums avec davantage de connaissances.
                            <br></br><br></br>
                            Chez <span style={{ textDecoration: "underline" }}>Abstraction Paris</span>, la qualité et l’authenticité sont au coeur de nos valeurs. Elles se retrouvent tant dans le choix de nos parfumeurs et de nos partenaires que dans la sélection de nos matières premières. Nous travaillons en direct avec les meilleurs fournisseurs mondiaux et souhaitons faire la lumière sur les savoir-faire ancestraux de cette industrie auprès de notre clientèle.
                            <br></br><br></br>
                            A l’instar du vin qui macère, les concentrés de parfums mûrissent avec le temps . Nous avons pris la décision de faire de cette maturation notre force et d’expliquer la richesse de l’évolution des notes à travers notre collection millésimée.
                        </p>
                    </div>
                </div>
            </Row>
            <Row style={{ width: "100vw" }}>
                <div style={{ width: "100vw", height: "80vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#fffef2", marginTop: "-20px" }}>
                    <img style={{ borderRadius: "20px", marginTop: "-15px", zIndex: 1 }} width="320px" src="./sebastien.jpg" alt="Sébastien Plan" />
                    <div style={{ marginLeft: "25px" }}>
                        <h2 style={{ fontFamily: "beau", fontSize: "24px" }}>SÉBASTIEN PLAN</h2>
                        <h2 style={{ fontFamily: "beau", fontStyle: "italic", fontSize: "22px" }}>Slow Burn Desire</h2>
                        <div style={{ ...styles.textContainer, height: "40vh", width: "40vw", marginLeft: "-30px" }}>
                            <p style={{ fontSize: 16 }}>Fasciné par les 5 sens et passionné de matières premières, Sébastien a le désir de partager sa sensibilité, sa vision du monde et ses valeurs au travers d’une marque qui lui ressemble. Une marque qui met en lumière ses ingrédients, les partenaires qui en sont à l’origine et les parfumeurs qui composent ses créations.</p>
                        </div>
                    </div>
                </div>
            </Row>
            <Footer />

        </Layout>
    );
}

export default connect(null, null)(Histoire);

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
        marginTop: "30px",
        fontFamily: "beau",
        fontSize: "18px",
        lineHeight: "30px",

    },
    textmenu: {
        fontSize: '14px',
        marginBottom: "30px",
        marginTop: "30px"

    },
    ginkoright: {
        marginLeft: "80vw",
        marginTop: "90vh",
        position: "absolute",
        zIndex: 2,
        opacity: 0.6,
        transform: "rotate(-90deg)"
    }
}