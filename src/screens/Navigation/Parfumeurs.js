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


function Parfumeurs(props) {



    return (
        <Layout fluid style={styles.container}>
            <div style={{ height: "33vh", width: "1px", backgroundColor: "#1b1a18", marginLeft: "30vw", marginTop: "85vh", position: "absolute" }}></div>
            <div style={{ height: "33vh", width: "1px", backgroundColor: "#1b1a18", marginLeft: "70vw", marginTop: "162vh", position: "absolute" }}></div>
            <div style={{ height: "33vh", width: "1px", backgroundColor: "#1b1a18", marginLeft: "30vw", marginTop: "239vh", position: "absolute" }}></div>

            {/*             <img style={styles.ginkoright} width="340px" src="./ginko.png" alt="ginko" />
 */}            <Row>
                <Header title={"PARFUMEURS"} />
            </Row>

            <Row>
                <div style={{ width: "100vw", height: "80vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#fffef2", marginTop: "20px" }}>
                    <img style={{ borderRadius: "20px", marginTop: "-15px", zIndex: 1 }} width="320px" src="./amelie.jpg" alt="Sébastien Plan" />
                    <div style={{ marginLeft: "25px" }}>
                        <h2 style={{ fontFamily: "beau", fontSize: "24px" }}>AMÉLIE JACQUIN</h2>
                        <h2 style={{ fontFamily: "beau", fontStyle: "italic", fontSize: "22px" }}>Sombres marguerites</h2>
                        <div style={{ ...styles.textContainer, height: "40vh", width: "40vw", marginLeft: "-30px" }}>
                            <p>Fasciné par les 5 sens et passionné de matières premières, Sébastien a le désir de partager sa sensibilité, sa vision du monde et ses valeurs au travers d’une marque qui lui ressemble. Une marque qui met en lumière ses ingrédients, les partenaires qui en sont à l’origine et les parfumeurs qui composent ses créations.</p>
                        </div>
                    </div>
                </div>
            </Row>
            <Row>
                <div style={{ width: "100vw", height: "80vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#fffef2", marginTop: "-20px" }}>
                    <div style={{ marginLeft: "25px" }}>
                        <h2 style={{ fontFamily: "beau", fontSize: "24px", marginLeft: "200px" }}>ALEX LEE</h2>
                        <h2 style={{ fontFamily: "beau", fontStyle: "italic", fontSize: "22px", marginLeft: "200px" }}>Women and leaves</h2>
                        <div style={{ ...styles.textContainer, height: "40vh", width: "40vw", marginLeft: "-30px", zIndex: 1 }}>
                            <p>Fasciné par les 5 sens et passionné de matières premières, Sébastien a le désir de partager sa sensibilité, sa vision du monde et ses valeurs au travers d’une marque qui lui ressemble. Une marque qui met en lumière ses ingrédients, les partenaires qui en sont à l’origine et les parfumeurs qui composent ses créations.</p>
                        </div>
                    </div>
                    <img style={{ borderRadius: "20px", marginTop: "-15px", zIndex: 1 }} width="320px" src="./alex.jpg" alt="Sébastien Plan" />
                </div>
            </Row>
            <Row>
                <div style={{ width: "100vw", height: "80vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#fffef2", marginTop: "-20px" }}>
                    <img style={{ borderRadius: "20px", marginTop: "-15px", zIndex: 1 }} width="320px" src="./mylene.jpg" alt="Sébastien Plan" />
                    <div style={{ marginLeft: "25px" }}>
                        <h2 style={{ fontFamily: "beau", fontSize: "24px" }}>MYLÈNE ALRAN</h2>
                        <h2 style={{ fontFamily: "beau", fontStyle: "italic", fontSize: "22px" }}>White energy</h2>
                        <div style={{ ...styles.textContainer, height: "40vh", width: "40vw", marginLeft: "-30px" }}>
                            <p>Fasciné par les 5 sens et passionné de matières premières, Sébastien a le désir de partager sa sensibilité, sa vision du monde et ses valeurs au travers d’une marque qui lui ressemble. Une marque qui met en lumière ses ingrédients, les partenaires qui en sont à l’origine et les parfumeurs qui composent ses créations.</p>
                        </div>
                    </div>
                </div>
            </Row>
            <Row>
                <div style={{ width: "100vw", height: "80vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#fffef2", marginTop: "-20px" }}>
                    <div style={{ marginLeft: "25px" }}>
                        <h2 style={{ fontFamily: "beau", fontSize: "24px", marginLeft: "160px" }}>ALEXANDRA CARLIN</h2>
                        <h2 style={{ fontFamily: "beau", fontStyle: "italic", fontSize: "22px", marginLeft: "160px" }}>Blue Rouge</h2>
                        <div style={{ ...styles.textContainer, height: "40vh", width: "40vw", marginLeft: "-30px", zIndex: 1 }}>
                            <p>Fasciné par les 5 sens et passionné de matières premières, Sébastien a le désir de partager sa sensibilité, sa vision du monde et ses valeurs au travers d’une marque qui lui ressemble. Une marque qui met en lumière ses ingrédients, les partenaires qui en sont à l’origine et les parfumeurs qui composent ses créations.</p>
                        </div>
                    </div>
                    <img style={{ borderRadius: "20px", marginTop: "-15px", zIndex: 1 }} width="320px" src="./sebastien.jpg" alt="Sébastien Plan" />
                </div>
            </Row>
            <Footer />
        </Layout>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: function () {
            dispatch({ type: "increase" });
        },
    };
}

export default connect(null, mapDispatchToProps)(Parfumeurs);

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