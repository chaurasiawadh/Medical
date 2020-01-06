import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./screen/Home";
import Report from "./screen/report";
import NavBoot from "./component/main/navBoot";
import complaintShow from "./screen/complaint/complaintShow";
import firebase from "firebase/app";
import "firebase/firestore";

var config = {
  apiKey: "AIzaSyCBPs18Jo7UMXFq1M6OstZCjCoY5cQCqYY",
  authDomain: "medical-75edc.firebaseapp.com",
  databaseURL: "https://medical-75edc.firebaseio.com",
  projectId: "medical-75edc",
  storageBucket: "medical-75edc.appspot.com",
  messagingSenderId: "818212466338",
};
firebase.initializeApp(config);
const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true };
firestore.settings(settings);


class App extends React.Component {
  render() {
    return (
      <div>
        <NavBoot />
        <Switch>
          <Route path="/complaint" component={complaintShow} />
          <Route path="/report" component={Report} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
