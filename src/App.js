
import "./App.css";
import "./Style/main.css";
import "./Style/navbar.css";

import Header from "./Components/header";
import HomePage from "./Views/home";
import ContactPage from "./Views/contact";
import InfoPage from "./Views/info";

import Footer from './Components/footer';

import "./Style/index.scss";

import {
  HashRouter,
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
          <Route exact path="/info" element={<InfoPage />} />

        </Routes>
        {/* <Route exact path="/Vodka/:name" component={Vodka} /> */}
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
