import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./Screen/HomeScreen";
import NavigationScreen from "./Screen/NavigationScreen";

import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import CounterStep from "./reducers/StepReducer";

function App() {
  const store = createStore(combineReducers({ CounterStep }));

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <NavigationScreen />
          </Route>
          <Route path="/bienvenue" component={HomeScreen}></Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
