const React = require("react");
const ReactDom = require("react-dom");
const { hot } = require("react-hot-loader/root");

const Hello = require("./Hello");
const Hot = hot(Hello);

ReactDom.render(<Hot />, document.querySelector("#root"));
