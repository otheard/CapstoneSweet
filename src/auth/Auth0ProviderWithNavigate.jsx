import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <Auth0Provider
    domain="http://localhost:3500"
    clientId="vxTaicOpqeWrY4UWLvvriJIppXyuCYIH"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);