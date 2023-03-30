import { PropsWithChildren, useState } from "react";
import classes from "./DropdownMenu.module.css";

const DropdownMenu: React.FC<PropsWithChildren> = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState("main");
  return <div className={classes.dropdown}>{children}</div>;
};

export default DropdownMenu;
