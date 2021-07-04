import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by Inês Marques and is {" "}
            <a href="https://github.com/ines-marques/dictonary-react-project" target="_blank" rel="noopener noreferrer">open-sourced on GitHub</a>
          </small>
        </footer>
      </div>
    </div>
  );
}

