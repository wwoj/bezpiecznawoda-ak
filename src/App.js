
import "./App.css";
import "./Style/main.css";
import "./Style/navbar.css";

import Header from "./Components/header";
import HomePage from "./Views/home";
import ContactPage from "./Views/contact";
import InfoPage from "./Views/info";
import Offerts from './Views/offerts';
import Footer from './Components/footer';
import History from './Views/history';
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
          <Route exact path="/offerts" element={<Offerts />} />
          <Route exact path="/history" element={<History />} />
        </Routes>
        {/* <Route exact path="/Vodka/:name" component={Vodka} /> */}
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
