import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <p>
            This project was coded by Sandra Domeikiene and is{" "}
            <a
              href="https://github.com/sanddot/react-weather-app"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub.
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
