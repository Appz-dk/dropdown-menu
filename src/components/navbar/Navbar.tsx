import classes from "./Navbar.module.css";

import { ReactComponent as BellIcon } from "../icons/bell.svg";
import { ReactComponent as PlusIcon } from "../icons/plus.svg";
import { ReactComponent as CogIcon } from "../icons/cog.svg";
import MainDropDown from "../dropdown/MainDropDown";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <ul role="list">
        <NavItem icon={<BellIcon />} />
        <NavItem icon={<CogIcon />} />
        <NavItem icon={<PlusIcon />} />
        <MainDropDown />
      </ul>
    </nav>
  );
};

export default Navbar;
