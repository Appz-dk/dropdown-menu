import { PropsWithChildren } from "react";
import classes from "./Navbar.module.css";

const Navbar: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <nav className={classes.navbar}>
      <ul role="list">{children}</ul>
    </nav>
  );
};

export default Navbar;
