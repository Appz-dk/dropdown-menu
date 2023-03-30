import { PropsWithChildren, ReactElement, useState } from "react";
import classes from "./NavItem.module.css";

type NavItemProps = {
  icon: ReactElement | string;
};

const NavItem: React.FC<PropsWithChildren<NavItemProps>> = ({ icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className={classes["nav-item"]}>
      <a href="#" className={classes["icon-btn"]} onClick={() => setIsOpen((prev) => !prev)}>
        {icon}
      </a>
      {isOpen && children}
    </li>
  );
};

export default NavItem;
