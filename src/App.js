import "./App.css";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navigation />
      <About />
    </div>
  );
}

export default App;
