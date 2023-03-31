import "./App.css";
import "../src/style/portifolio.css";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Portifolio from "./components/Portifolio";

function App() {
  return (
    <div className="App">
      {/* <Navigation />
      <Home /> */}
      <Portifolio />
    </div>
  );
}

export default App;
