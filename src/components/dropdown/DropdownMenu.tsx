import { useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import classes from "./DropdownMenu.module.css";
import MainMenu from "./dropdownMenus/MainMenu";
import SettingsMenu from "./dropdownMenus/SettingsMenu";

const DropdownMenu = () => {
  // TODO: Could improve typing
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState<undefined | number>(undefined);

  const primaryRef = useRef<HTMLDivElement>(null);
  const settingsRef = useRef<HTMLDivElement>(null);

  // Function to calculate the height on the menu for CSSTransition to render
  const calcMenuHeight = (height: number | undefined) => {
    if (!height) return;
    setMenuHeight(height);
  };

  const onMenuChange = (menu: string) => {
    setActiveMenu(menu);
  };

  return (
    <div className={classes.dropdown} style={{ height: menuHeight || "auto" }}>
      {/* Main menu */}
      <CSSTransition
        nodeRef={primaryRef}
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames={{
          enter: classes["menu-primary-enter"],
          enterActive: classes["menu-primary-enter-active"],
          exit: classes["menu-primary-exit"],
          exitActive: classes["menu-primary-exit-active"],
        }}
        onEnter={() => calcMenuHeight(primaryRef?.current?.offsetHeight)}
      >
        <div className={classes.menu} ref={primaryRef}>
          <MainMenu onMenuChange={onMenuChange} />
        </div>
      </CSSTransition>

      {/* Settings menu */}
      <CSSTransition
        nodeRef={settingsRef}
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        classNames={{
          enter: classes["menu-secondary-enter"],
          enterActive: classes["menu-secondary-enter-active"],
          exit: classes["menu-secondary-exit"],
          exitActive: classes["menu-secondary-exit-active"],
        }}
        onEnter={() => calcMenuHeight(settingsRef?.current?.offsetHeight)}
      >
        <div className={classes.menu} ref={settingsRef}>
          <SettingsMenu onMenuChange={onMenuChange} />
        </div>
      </CSSTransition>
    </div>
  );
};

export default DropdownMenu;
