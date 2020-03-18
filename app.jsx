import React from "react";
import { render } from "react-dom";
import { hot } from "react-hot-loader/root";
import Hello from "./Hello";

const Hot = hot(Hello);

render(<Hot />, document.querySelector("#root"));
