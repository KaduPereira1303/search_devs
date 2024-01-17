import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import * as routeNames from "./routes-path"
import Perfil from "../pages/Perfil/Perfil"; 
export function RouterApp(params) {
  return (
    <Router>
      <Routes>
        <Route path= {`${routeNames.HOME}`} element={<Home />} />
        <Route path={`${routeNames.PERFIL}:devData`} element={<Perfil />} />
      </Routes>
    </Router>
  );
}
