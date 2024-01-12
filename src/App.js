import "./App.css";

import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>

      <Weather />
      <footer>This Weather App was coded by Lara Mendes and it's opened source on my <a href="https://github.com/LaraMendesss/react-weather-app" title="Lara GitHub account">Github</a>. </footer>
    </div>
  );
}
