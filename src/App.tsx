import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import CoinGecko from "./CoinGecko";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <CoinGecko />
    </div>
  );
}

export default App;
