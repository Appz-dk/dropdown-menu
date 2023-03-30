import "./App.css";
import Navbar from "./components/navbar/Navbar";
import NavItem from "./components/navbar/NavItem";

import { ReactComponent as BellIcon } from "./components/icons/bell.svg";
import { ReactComponent as PlusIcon } from "./components/icons/plus.svg";
import { ReactComponent as CogIcon } from "./components/icons/cog.svg";

import MainDropDown from "./components/dropdown/MainDropDown";

function App() {
  return (
    <div className="App">
      <Navbar>
        <NavItem icon={<BellIcon />} />
        <NavItem icon={<CogIcon />} />
        <NavItem icon={<PlusIcon />} />
        <MainDropDown />
      </Navbar>
    </div>
  );
}

export default App;
