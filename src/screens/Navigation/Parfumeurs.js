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

            <div style={{ height: "33vh", width: "1px", backgroundColor: "#1b1a18", marginLeft: "30vw", marginTop: "125vh", position: "absolute" }}></div>
            <div style={{ height: "33vh", width: "1px", backgroundColor: "#1b1a18", marginLeft: "70vw", marginTop: "202vh", position: "absolute" }}></div>
            <div style={{ height: "33vh", width: "1px", backgroundColor: "#1b1a18", marginLeft: "30vw", marginTop: "279vh", position: "absolute" }}></div>
            <div style={{ height: "33vh", width: "1px", backgroundColor: "#1b1a18", marginLeft: "70vw", marginTop: "356vh", position: "absolute" }}></div>

            <img style={styles.ginkoright} width="340px" src="./ginko.png" alt="ginko" />
            <img style={styles.ginkoleft} width="340px" src="./ginko.png" alt="ginko" />
            <img style={styles.ginkobias} width="340px" src="./ginko.png" alt="ginko" />

            <Row style={{ width: "100vw" }}>
                <Header title={"PARFUMEURS"} />
            </Row >

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{ ...styles.textContainer, height: "35vh", width: "80vw", zIndex: 1 }}>
                    <p style={{ lineHeight: 2, fontStyle: "italic", paddingLeft: "20px", paddingRight: "20px", textAlign: "justify" }}>
                        Les cinq parfumeurs se connaissent de longue date. Ils ont tous fait leurs classes à Grasse, dans le sud de la France, capitale du parfum.
                        Et ils ont un point commun; ils ont tous habité, à différentes périodes pour certains, ou en colocation pour d’autres, dans l’ancienne Banque de France de Grasse, haut lieu des soirées étudiantes de la parfumerie grassoise !
                        <br></br>
                        C’est donc avant tout une relation d’amitié forte qui les lie, au-delà de leur passion commune pour le parfum.
                    </p>
                </div>
            </div>

            <Row style={{ width: "100vw" }}>
                <div style={{ width: "100vw", height: "80vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#fffef2", marginTop: "20px" }}>
                    <img style={{ borderRadius: "20px", marginTop: "-15px", zIndex: 1 }} width="320px" src="./alexandra.jpg" alt="Alexandra C." />
                    <div style={{ marginLeft: "25px" }}>
                        <h2 style={{ fontFamily: "beau", fontSize: "24px" }}>ALEXANDRA C.</h2>
                        <h2 style={{ fontFamily: "beau", fontStyle: "italic", fontSize: "22px" }}>Bleu Rouge</h2>
                        <div style={{ ...styles.textContainer, height: "40vh", width: "40vw", marginLeft: "-30px" }}>
                            <p style={{ fontSize: 16 }}>Alexandra est parfumeure chez Symrise. Elle a grandi à paris et s’est passionné très jeune pour l’association des odeurs, ce qui l’a amené très tôt à voyager partout autour du monde, à la chasse de nouvelles idées. Ses expérimentations permanentes donnent lieu à des combinaisons toujours inattendues aussi bien dans ses parfums, que dans les recettes de cuisines qu’elle élabore et qu’elle teste sur ses amis…</p>
                        </div>
                    </div>
                </div>
            </Row>
            <Row style={{ width: "100vw" }}>
                <div style={{ width: "100vw", height: "80vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#fffef2", marginTop: "-20px" }}>
                    <div style={{ marginLeft: "25px" }}>
                        <h2 style={{ fontFamily: "beau", fontSize: "24px", marginLeft: "200px" }}>SÉBASTIEN P.</h2>
                        <h2 style={{ fontFamily: "beau", fontStyle: "italic", fontSize: "22px", marginLeft: "200px" }}>Slow Burn Desire</h2>
                        <div style={{ ...styles.textContainer, height: "40vh", width: "40vw", marginLeft: "-30px", zIndex: 1 }}>
                            <p style={{ fontSize: 16 }}>Sébastien a grandi professionnellement dans les matières premières naturelles de Robertet, une société française de parfum.
                                Il a appris à appréhender ces ingrédients et à les mettre en valeur auprès d’une équipe au sein de laquelle se trouvaient de véritables bibles de la parfumerie, certains avec plus de cinquante ans de carrière !
                                C’est dans cet environnement qu’il a développé son écriture olfactive.
                            </p>
                        </div>
                    </div>
                    <img style={{ borderRadius: "20px", marginTop: "-15px", zIndex: 1 }} width="320px" src="./sebastiennb.jpg" alt="Sébastien P." />
                </div>
            </Row>
            <Row style={{ width: "100vw" }}>
                <div style={{ width: "100vw", height: "80vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#fffef2", marginTop: "-20px" }}>
                    <img style={{ borderRadius: "20px", marginTop: "-15px", zIndex: 1 }} width="320px" src="./alex.jpg" alt="Alex L." />
                    <div style={{ marginLeft: "25px" }}>
                        <h2 style={{ fontFamily: "beau", fontSize: "24px" }}>Alex L.</h2>
                        <h2 style={{ fontFamily: "beau", fontStyle: "italic", fontSize: "22px" }}>Women and leaves</h2>
                        <div style={{ ...styles.textContainer, height: "40vh", width: "40vw", marginLeft: "-30px" }}>
                            <p style={{ fontSize: 16 }}>Alex est parfumeur chez Mane. Il vient de San Francisco., ses parents sont chinois et il a aujourd’hui la nationalité française. C’est ce bouillon de cultures qui fait sa singularité. Il est toujours ouvert à de nouvelles rencontres et s’en nourrit pour se renouveler en permanence dans son travail, souvent à contre-pied mais toujours à l’équilibre.</p>
                        </div>
                    </div>
                </div>
            </Row>
            <Row style={{ width: "100vw" }}>
                <div style={{ width: "100vw", height: "80vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#fffef2", marginTop: "-20px" }}>
                    <div style={{ marginLeft: "25px" }}>
                        <h2 style={{ fontFamily: "beau", fontSize: "24px", marginLeft: "160px" }}>Mylène A.</h2>
                        <h2 style={{ fontFamily: "beau", fontStyle: "italic", fontSize: "22px", marginLeft: "160px" }}>White energy</h2>
                        <div style={{ ...styles.textContainer, height: "40vh", width: "40vw", marginLeft: "-30px", zIndex: 1 }}>
                            <p style={{ fontSize: 16 }}>Mylène est parfumeure chez Givaudan. Elle est née à Albi et ce sont les odeurs de nature de la campagne ensoleillée du sud ouest de la France qui ont bercé son enfance. Elle a gardé un attachement particulier à ses odeurs familières, comme une madeleine, qu’on retrouve souvent dans son travail et se traduit par l’emprunte d’une certaine douceur dans ses compositions.</p>
                        </div>
                    </div>
                    <img style={{ borderRadius: "20px", marginTop: "-15px", zIndex: 1 }} width="320px" src="./mylene.jpg" alt="Mylène A." />
                </div>
            </Row>
            <Row style={{ width: "100vw" }}>
                <div style={{ width: "100vw", height: "80vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#fffef2", marginTop: "-20px" }}>
                    <img style={{ borderRadius: "20px", marginTop: "-15px", zIndex: 1 }} width="320px" src="./amelie.jpg" alt="Amélie J." />
                    <div style={{ marginLeft: "25px" }}>
                        <h2 style={{ fontFamily: "beau", fontSize: "24px" }}>Amélie J.</h2>
                        <h2 style={{ fontFamily: "beau", fontStyle: "italic", fontSize: "22px" }}>Sombres Marguerites</h2>
                        <div style={{ ...styles.textContainer, height: "40vh", width: "40vw", marginLeft: "-30px" }}>
                            <p style={{ fontSize: 16 }}>Amélie est parfumeure chez Givaudan également, aux côtés de Mylène. Sa passion de la parfumerie lui vient de sa mère, dont la famille vient de  Grasse. Amélie a passé toutes ses vacances d’enfance dans l’arrière pays grassois où elle a été bercée par les odeurs emblématiques de la région, lavande, ciste, jasmin… C’est donc depuis de nombreuses années qu’elle nourrit cette passion à laquelle elle s’adonne aujourd’hui entièrement.</p>
                        </div>
                    </div>
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
        position: "absolute",
        marginLeft: "80vw",
        marginTop: "40vh",
        position: "absolute",
        zIndex: 2,
        opacity: 0.6,
        transform: "rotate(-90deg)"
    },
    ginkoleft: {
        position: "absolute",
        marginLeft: "-5vw",
        marginTop: "160vh",
        position: "absolute",
        zIndex: 2,
        opacity: 0.6,
        transform: "rotate(90deg)"
    },
    ginkobias: {
        position: "absolute",
        marginLeft: "80vw",
        marginTop: "265vh",
        position: "absolute",
        zIndex: 2,
        opacity: 0.6,
        transform: "rotate(-150deg)"
    },

}