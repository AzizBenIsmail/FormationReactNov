import logo from "./logo.svg";
import "./App.css";

export default function App() {
  //logique
  //1
  const name = "hello world";
  //2
  const element = <h1> maarahbe bikom </h1>

  return (
    //view
    <div className="App">
      <header className="App-header">
        {name}
        {element}
      </header>
    </div>
  );
}

