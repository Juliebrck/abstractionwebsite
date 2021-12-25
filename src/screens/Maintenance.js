import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Container, Col, Row } from "reactstrap";
import { Link } from 'react-router-dom';
import { Icon } from "leaflet";

import Layout from "antd/lib/layout/layout";
import Footer from "./Footer.js";
//import { Col } from 'antd'


function Maintenance(props) {

    return (
        <Layout fluid style={styles.container}>
            <div style={{ width: '100vw', height: "90vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <div style={{ width: '100vw', display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20vh" }}>
                    <img className="logo1" width="28%" src="./logominres.png" alt="logo abstraction" />
                    <img className="logo2" width="28%" src="./titrenoir.png" alt="logo abstraction" />
                </div>
                <p style={{ marginTop: "40vh" }}>Le site est actuellement en maintenance, bonnes fêtes et à très vite !</p>
            </div>
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

export default connect(null, mapDispatchToProps)(Maintenance);

const styles = {
    container: {
        height: "100vh",
        width: "100vw",
        paddingLeft: "0px",
        paddingRight: "0px",
        marginLeft: 0,
        marginRight: 0,
        backgroundColor: "#fffef2",
        fontFamily: "beau",
        fontSize: "22px"
    },

}