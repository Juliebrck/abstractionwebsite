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
    <div style={{ flex: 1, marginRight: 0, marginLeft: 0, width: "100vw" }}>
      {step === 0 && <WelcomeScreen />}
      {step === 1 && <HomeScreen />}
    </div>
  );
}

function mapStateToProps(state) {
  return { CounterStep: state.CounterStep };
}

export default connect(mapStateToProps, null)(NavigationScreen);
