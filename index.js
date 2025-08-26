// 1.create entry components
// 2.create props to replace hardcode into data
// 3a.Import the emojipedia components
// 3b. Map through the emojipedia array and render Entry compoments
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./../public/styles.css";

ReactDOM.render(<App />, document.getElementById("root"));
