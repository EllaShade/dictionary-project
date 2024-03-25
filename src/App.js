import logo from "./logo.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" className="App-logo img-fluid" />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer>
        This project was coded by{" "}
        <a href="https://github.com/EllaShade">Ella Graf</a> and is on{" "}
        <a href="https://github.com/EllaShade/dictionary-project">GitHub</a> and
        hosted on{" "}
        <a href="https://dictionary-cyclopedia.netlify.app/">Netlify</a> .
      </footer>
    </div>
  );
}

export default App;
