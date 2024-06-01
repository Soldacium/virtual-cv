import "./App.scss";
import { BrowserRouter, Link } from "react-router-dom";

import styled from "styled-components";
import AnimatedSplashRoutes from "./SplashRoutes";

const Menu = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  gap: 20px;
  z-index: 1000;
`;

const App: React.FC = () => (
  <BrowserRouter>
    <Menu>
      <Link to="/">a</Link>
      <Link to="/about">a</Link>
      <Link to="/contact">a</Link>
    </Menu>
    <AnimatedSplashRoutes />
  </BrowserRouter>
);

export default App;
