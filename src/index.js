import React from "react";
import ReactDOM from "react-dom";
import WeatherDisplay from "../src/WeatherDisplay";

const App = () => {
  return (
    <div>
      Hello World.
      <WeatherDisplay />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
