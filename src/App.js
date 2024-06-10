import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarContainer from "./Companents/Navbar/Navbar";
import SectionContainer from "./Companents/Section/Section";
import FooterContainer from "./Companents/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavbarContainer />
      <SectionContainer />
      <FooterContainer />
    </div>
  );
}

export default App;
