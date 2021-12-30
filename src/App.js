import logo from "./logo.svg";
import "./App.css";
import "./Style/navbar.css";

import Header from "./Components/header";
import HomePage from "./Views/home";
import ContactPage from "./Views/contact";

import {
  BrowserRouter,HashRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes>
        <Route exact path="/" element={<HomePage />} />
      <Route exact path="/contact" element={<ContactPage />} />
        </Routes>
        {/* <Route exact path="/Vodka/:name" component={Vodka} /> */}
      </HashRouter>
    </div>
  );
}

export default App;
