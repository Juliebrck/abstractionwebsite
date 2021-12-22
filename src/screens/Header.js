import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ title }) {

    return (
        <div style={styles.headercontainer}>
            <Link to="/" ><img className="logomenu" width="70px" src="./logominres.png" alt="logo abstraction" /></Link>
            <div>
                <h1 style={styles.pagetitle}>{title}</h1>
                <div style={{ backgroundColor: "black", height: "1px", width: "200px" }}></div>
            </div>
        </div>
    )
}

const styles = {
    headercontainer: {
        width: "100vw",
        height: "8vh",
        marginTop: "20px",
        marginLeft: "40px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#fffef2",
    },
    pagetitle: {
        marginLeft: "10px",
        fontFamily: "nevoclara"
    },
}