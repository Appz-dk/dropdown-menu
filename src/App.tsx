import "./App.css";
import Navbar from "./components/navbar/Navbar";
import NavItem from "./components/navbar/NavItem";

import { ReactComponent as ArrowIcon } from "./components/icons/arrow.svg";

function App() {
  return (
    <div className="App">
      <Navbar>
        <NavItem icon={<ArrowIcon />} />
      </Navbar>
    </div>
  );
}

export default App;
