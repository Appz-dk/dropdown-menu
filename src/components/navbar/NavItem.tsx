import classes from "./NavItem.module.css";

type NavItemProps = {
  icon: any;
};

const NavItem: React.FC<NavItemProps> = ({ icon }) => {
  return (
    <li className={classes["nav-item"]}>
      <a href="#" className={classes["icon-btn"]}>
        {icon}
      </a>
    </li>
  );
};

export default NavItem;
