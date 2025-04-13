import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import AppRoutes from "./routes";
import Headermain from "../header";
import "./App.css";

function _ScrollToTop(props) {
  const { pathname } = props.location;
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}

const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop>
        <Headermain />
        <AppRoutes />
      </ScrollToTop>
    </Router>
  );
}
