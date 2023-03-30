import { ReactElement } from "react";
import classes from "./IconBtn.module.css";

type IconBtnProps = {
  icon: ReactElement | string;
  isRightIcon?: boolean;
};

const IconBtn: React.FC<IconBtnProps> = ({ icon, isRightIcon }) => {
  const className = isRightIcon
    ? `${classes["icon-btn"]} ${classes["icon-right"]}`
    : classes["icon-btn"];

  return <span className={className}>{icon}</span>;
};

export default IconBtn;
