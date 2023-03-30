import { PropsWithChildren, ReactElement } from "react";
import classes from "./DropdownItem.module.css";
import IconBtn from "../utils/IconBtn";

type DropdownItemProps = {
  leftIcon?: ReactElement | string;
  rightIcon?: ReactElement | string;
  onMenuChange?: (menu: string) => void;
  gotoMenu?: string;
};

const DropdownItem: React.FC<PropsWithChildren<DropdownItemProps>> = ({
  children,
  leftIcon = "",
  rightIcon,
  onMenuChange,
  gotoMenu,
}) => {
  return (
    <a
      href="#"
      className={classes["dropdown-item"]}
      onClick={() => gotoMenu && onMenuChange && onMenuChange(gotoMenu)}
    >
      <IconBtn icon={leftIcon} />
      {children}
      {rightIcon && <IconBtn icon={rightIcon} isRightIcon />}
    </a>
  );
};

export default DropdownItem;
