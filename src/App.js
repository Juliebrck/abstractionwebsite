import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import Ateliers from "./screens/Navigation/Ateliers.js";
import Collectionclassique from "./screens/Navigation/Collectionclassique.js";
import Collectionmillesimee from "./screens/Navigation/Collectionmillesimee.js";
import Contact from "./screens/Navigation/Contact.js";
import Histoire from "./screens/Navigation/Histoire.js";
import Matierespremieres from "./screens/Navigation/Matierespremieres.js";
import Parfumeurs from "./screens/Navigation/Parfumeurs.js";
import Partenaires from "./screens/Navigation/Partenaires.js";

import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import CounterStep from "./reducers/StepReducer";

function App() {
  const store = createStore(combineReducers({ CounterStep }));

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route component={WelcomeScreen} path="/" exact />
          <Route component={Ateliers} path='/ateliers' exact />
          <Route component={Collectionclassique} path='/collectionclassique' exact />
          <Route component={Collectionmillesimee} path='/collectionmillesimee' exact />
          <Route component={Contact} path='/contact' exact />
          <Route component={Histoire} path='/histoire' exact />
          <Route component={Matierespremieres} path='/matierespremieres' exact />
          <Route component={Parfumeurs} path='/parfumeurs' exact />
          <Route component={Partenaires} path='/partenaires' exact />

          <Route path="/bienvenue" component={HomeScreen}></Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
