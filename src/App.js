import "./App.css";
import MainApp from "./app/index";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

export default App;
