import React from "react";
import ReactDOM from "react-dom";
import ProductDetail from "./ProductDetail";
const App = () => {
  return (
    <div>
      Hello product 
    <ProductDetail/>
    </div>
  );
};

const rootEl = document.getElementById("root");
const render = (Component) => ReactDOM.render(<Component />, rootEl);
render(App);
