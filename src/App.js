import logo from "./logo.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" className="App-logo" />
      </header>
      <main>
        <Dictionary defaultKeyword="Sunset" />
      </main>
      <footer>
        This project was coded by{" "}
        <a href="https://github.com/EllaShade" target="_blank" rel="noreferrer">
          Ella Graf
        </a>{" "}
        and is on{" "}
        <a
          href="https://github.com/EllaShade/dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://dictionary-cyclopedia.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>{" "}
        .
      </footer>
    </div>
  );
}

export default App;
