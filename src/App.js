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
        This project was coded by Ella Graf and is on GitHub and hosted on
        Netlify.
      </footer>
    </div>
  );
}

export default App;
