import "./App.css";

import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
        <div className="box">
      <h1>My React Weather App</h1>
     <Weather />
     
      </div>
      <footer> Coded by <a href="https://github.com/LaraMendesss" target="_blank" without rel="noreferrer">Lara Mendes</a>, 
      open-sourced on <a href="https://github.com/LaraMendesss/react-weather-app" target="_blank" without rel="noreferrer">GitHub</a> and hosted on <a href="https://react-weather-app-lara.netlify.app/" target="_blank" without rel="noreferrer">Netlify</a>🤍</footer>
     </div>
  );
}
