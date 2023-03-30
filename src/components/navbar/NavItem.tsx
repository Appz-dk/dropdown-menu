import { PropsWithChildren, ReactElement, useState } from "react";
import classes from "./NavItem.module.css";

type NavItemProps = {
  icon: ReactElement | string;
};

const NavItem: React.FC<PropsWithChildren<NavItemProps>> = ({ icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  // This component is only made for showing/hiding a dropdown.
  // If you want to have icons do other things, then we have to make
  // Some adjustments to the onclick e.g. conditionally decide if onClick
  // Should toggle setIsOpen or e.g. "goToPage" or something.

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
