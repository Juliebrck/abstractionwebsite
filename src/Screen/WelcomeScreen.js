import React, { useState, useEffect } from "react";
import "../App.css";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Container, Col } from "reactstrap";
import { MenuOutlined, UserOutlined } from '@ant-design/icons';
//import { Col } from 'antd'


function WelcomeScreen(props) {
  /* useEffect(() => {
    let timeOut = setTimeout(function () {
      props.onIncreaseClick();
    }, 3000);
    return () => {
      clearTimeout(timeOut);
    };
  }, []); */

  let history = useHistory();

  const redirect = () => {
    history.push("/bienvenue");
  };

  return (
    <Container fluid className="App" style={{ paddingLeft: "0px", paddingRight: "0px", marginLeft: 0, marginRight: 0, }}>
      <div style={{ height: '10vh', width: '100vw', padding: "25px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <MenuOutlined style={{ color: '#fffef2', fontSize: 25 }} />
        <UserOutlined style={{ color: '#fffef2', fontSize: 30 }} />
      </div>
      <div style={{ height: '80vh', width: '100vw', display: "flex", justifyContent: "space-around", alignItems: "center" }}>
        <Col className="d-none d-md-block" style={{ width: '30vw' }}>
          <h2 style={styles.textmenu}>COLLECTION CLASSIQUE</h2>
          <h2 style={styles.textmenu}>COLLECTION MILLÉSIMÉE</h2>
          <h2 style={styles.textmenu}>MATIÈRES PREMIÈRES</h2>
          <h2 style={styles.textmenu}>ATELIERS</h2>
        </Col>
        <div style={{ width: '40vw', display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img onClick={() => redirect()} className="logo1" width="30%" src="./logominres.png" alt="logo abstraction" />
          <img className="logo2" width="20%" src="./titremastic.png" alt="logo abstraction" />
        </div>
        <Col className="d-none d-md-block" style={{ width: '30vw' }}>
          <h2 style={styles.textmenu}>HISTOIRE</h2>
          <h2 style={styles.textmenu}>PARFUMEURS</h2>
          <h2 style={styles.textmenu}>PARTENAIRES</h2>
          <h2 style={styles.textmenu}>CONTACTS</h2>
        </Col>

      </div>
      <h2 style={styles.text2}>22 rue Houdon 75018 Paris </h2>
      <span style={styles.text3}>Copyright © 2021 ABSTRACTION Paris. All rights reserved.</span>
    </Container>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: function () {
      dispatch({ type: "increase" });
    },
  };
}

export default connect(null, mapDispatchToProps)(WelcomeScreen);

const styles = {
  text2: {
    fontSize: '14px'
  },
  text3: {
    fontSize: '11px'
  },
  textmenu: {
    fontSize: '14px',
    marginBottom: "30px",
    marginTop: "30px"

  },
}
