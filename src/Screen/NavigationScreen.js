import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import HomeScreen from "./HomeScreen";
import WelcomeScreen from "./WelcomeScreen";

function NavigationScreen(props) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    setStep(props.CounterStep);
  }, [props.CounterStep]);

  return (
    <Container style={{ flex: 1 }}>
      {step === 0 && <WelcomeScreen />}
      {step === 1 && <HomeScreen />}
    </Container>
  );
}

function mapStateToProps(state) {
  return { CounterStep: state.CounterStep };
}

export default connect(mapStateToProps, null)(NavigationScreen);
