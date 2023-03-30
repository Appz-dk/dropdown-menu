import { PropsWithChildren, ReactElement } from "react";
import classes from "./DropdownItem.module.css";
import IconBtn from "../utils/IconBtn";

type DropdownItemProps = {
  leftIcon?: ReactElement | string;
  rightIcon?: ReactElement | string;
};

const DropdownItem: React.FC<PropsWithChildren<DropdownItemProps>> = ({
  children,
  leftIcon = "",
  rightIcon,
}) => {
  return (
    <a href="#" className={classes["dropdown-item"]}>
      <IconBtn icon={leftIcon} />
      {children}
      {rightIcon && <IconBtn icon={rightIcon} isRightIcon />}
    </a>
  );
};

export default DropdownItem;
