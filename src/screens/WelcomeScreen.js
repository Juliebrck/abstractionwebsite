import React, { useState, useEffect } from "react";
import "../App.css";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Container, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { MenuOutlined, UserOutlined } from '@ant-design/icons';

function WelcomeScreen(props) {

  const [dropdown, setDropdown] = useState(false);

  const toggle = () => {
    setDropdown(!dropdown)
  };


  return (
    <Container fluid className="App" style={{ paddingLeft: "0px", paddingRight: "0px", marginLeft: 0, marginRight: 0, }}>
      <div style={{ height: '10vh', width: '100vw', padding: "25px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>

        <Dropdown isOpen={dropdown} toggle={toggle}>
          <DropdownToggle style={{ background: "none", border: "none" }} caret>
            <MenuOutlined style={{ color: '#fffef2', fontSize: 25 }} />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem><Link to="/collectionclassique" style={styles.linkmenutop}><h2 style={styles.textmenutop}>COLLECTION CLASSIQUE</h2></Link></DropdownItem>
            <DropdownItem><Link to="/collectionmillesimee" style={styles.linkmenutop}><h2 style={styles.textmenutop}>COLLECTION MILLÉSIMÉE</h2></Link></DropdownItem>
            <DropdownItem><Link to="/matierespremieres" style={styles.linkmenutop}><h2 style={styles.textmenutop}>MATIÈRES PREMIÈRES</h2></Link></DropdownItem>
            <DropdownItem><Link to="/ateliers" style={styles.linkmenutop}><h2 style={styles.textmenutop}>ATELIERS</h2></Link></DropdownItem>
            <DropdownItem divider />
            <DropdownItem><Link to="/histoire" style={styles.linkmenutop}><h2 style={styles.textmenutop}>HISTOIRE</h2></Link></DropdownItem>
            <DropdownItem><Link to="/parfumeurs" style={styles.linkmenutop}><h2 style={styles.textmenutop}>PARFUMEURS</h2></Link></DropdownItem>
            <DropdownItem><Link to="/partenaires" style={styles.linkmenutop}><h2 style={styles.textmenutop}>PARTENAIRES</h2></Link></DropdownItem>
            <DropdownItem><Link to="/contact" style={styles.linkmenutop}><h2 style={styles.textmenutop}>CONTACT</h2></Link></DropdownItem>

          </DropdownMenu>
        </Dropdown>


        <Link to="/signin" style={styles.linkmenu}><UserOutlined style={{ color: '#fffef2', fontSize: 30 }} /></Link>
      </div>
      <div style={{ height: '80vh', width: '100vw', display: "flex", justifyContent: "space-around", alignItems: "center" }}>
        <Col className="d-none d-md-block" style={{ width: '30vw' }}>
          <Link to="/collectionclassique" style={styles.linkmenu}><h2 style={styles.textmenu}>COLLECTION CLASSIQUE</h2></Link>
          <Link to="/collectionmillesimee" style={styles.linkmenu}><h2 style={styles.textmenu}>COLLECTION MILLÉSIMÉE</h2></Link>
          <Link to="/matierespremieres" style={styles.linkmenu}><h2 style={styles.textmenu}>MATIÈRES PREMIÈRES</h2></Link>
          <Link to="/ateliers" style={styles.linkmenu}><h2 style={styles.textmenu}>ATELIERS</h2></Link>
        </Col>
        <div style={{ width: '40vw', display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img className="logo1" width="30%" src="./logominres.png" alt="logo abstraction" />
          <img className="logo2" width="20%" src="./titremastic.png" alt="logo abstraction" />
        </div>
        <Col className="d-none d-md-block" style={{ width: '30vw' }}>
          <Link to="/histoire" style={styles.linkmenu}><h2 style={styles.textmenu}>HISTOIRE</h2></Link>
          <Link to="/parfumeurs" style={styles.linkmenu}><h2 style={styles.textmenu}>PARFUMEURS</h2></Link>
          <Link to="/partenaires" style={styles.linkmenu}><h2 style={styles.textmenu}>PARTENAIRES</h2></Link>
          <Link to="/contact" style={styles.linkmenu}><h2 style={styles.textmenu}>CONTACT</h2></Link>
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
    fontSize: '16px',
    marginBottom: "30px",
    marginTop: "30px",
  },
  linkmenu: {
    textDecoration: 'none',
    color: "#fffef2",
  },
  textmenutop: {
    fontSize: '14px',
  },
  linkmenutop: {
    textDecoration: 'none',
    color: "#1b1a18",
  }
}
