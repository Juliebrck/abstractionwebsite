import React from 'react'

export default function Footer() {

    return (
        <div style={styles.footer}>
            <h2 style={styles.text2}>22 rue Houdon 75018 Paris </h2>
            <span style={styles.text3}>Copyright © 2021 ABSTRACTION Paris. All rights reserved.</span>
        </div>
    )
}

const styles = {
    footer: {
        width: "100vw",
        height: "10vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1b1a18",
        color: "#fffef2",
        fontFamily: "beau",
    },
    text2: {
        fontSize: '14px'
    },
    text3: {
        fontSize: '11px'
    },
}