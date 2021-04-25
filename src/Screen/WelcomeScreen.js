import "../App.css";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Container } from "reactstrap";

function WelcomeScreen(props) {
  let history = useHistory();

  const redirect = () => {
    history.push("/bienvenue");
  };

  return (
    <Container
      fluid
      style={{
        paddingLeft: "0px",
        paddingRight: "0px",
        marginLeft: 0,
        marginRight: 0,
      }}
      className="App"
    >
      <img
        onClick={() => redirect()}
        className="logo1"
        width="35%"
        src="./logominres.png"
        alt="logo abstraction"
      />
      <img
        className="logo2"
        width="25%"
        src="./titremastic.png"
        alt="logo abstraction"
      />
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
