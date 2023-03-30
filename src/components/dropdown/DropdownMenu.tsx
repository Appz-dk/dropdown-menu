import { PropsWithChildren, useState } from "react";
import { CSSTransition } from "react-transition-group";
import classes from "./DropdownMenu.module.css";
import MainMenu from "./dropdownMenus/MainMenu";
import SettingsMenu from "./dropdownMenus/SettingsMenu";

const DropdownMenu: React.FC<PropsWithChildren> = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState("main");

  const onMenuChange = (menu: string) => {
    setActiveMenu(menu);
  };

  return (
    <div className={classes.dropdown}>
      {/* Main menu */}
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames={{
          enter: classes["menu-primary-enter"],
          enterActive: classes["menu-primary-enter-active"],
          exit: classes["menu-primary-exit"],
          exitActive: classes["menu-primary-exit-active"],
        }}
      >
        <div className={classes.menu}>
          <MainMenu onMenuChange={onMenuChange} />
        </div>
      </CSSTransition>

      {/* Settings menu */}
      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        classNames={{
          enter: classes["menu-secondary-enter"],
          enterActive: classes["menu-secondary-enter-active"],
          exit: classes["menu-secondary-exit"],
          exitActive: classes["menu-secondary-exit-active"],
        }}
      >
        <div className={classes.menu}>
          <SettingsMenu onMenuChange={onMenuChange} />
        </div>
      </CSSTransition>
    </div>
  );
};

export default DropdownMenu;
