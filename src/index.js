import { StrictMode } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import { UserContect } from "./UserContext";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <UserContect.Provider value={user}>
        <App />
      </UserContect.Provider>
    </Router>
  </StrictMode>,
  rootElement
);
