import "./App.css";
import Navbar from "./components/navbar/Navbar";
import NavItem from "./components/navbar/NavItem";

import { ReactComponent as BellIcon } from "./components/icons/bell.svg";
import { ReactComponent as PlusIcon } from "./components/icons/plus.svg";
import { ReactComponent as CogIcon } from "./components/icons/cog.svg";
import DropdownMenu from "./components/dropdown/DropdownMenu";
import DropdownItem from "./components/dropdown/DropdownItem";

function PlusDropDown() {
  return (
    <DropdownMenu>
      <DropdownItem>testing</DropdownItem>
      <DropdownItem leftIcon={<CogIcon />}>With icon</DropdownItem>
    </DropdownMenu>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar>
        <NavItem icon={<BellIcon />}>
          <PlusDropDown />
        </NavItem>
        <NavItem icon={<CogIcon />} />
        <NavItem icon={<PlusIcon />}>
          <PlusDropDown />
        </NavItem>
      </Navbar>
    </div>
  );
}

export default App;
