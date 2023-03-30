import { ReactComponent as CaretIcon } from "../icons/caret.svg";
import NavItem from "../navbar/NavItem";
import DropdownMenu from "./DropdownMenu";

const MainMenu = () => {
  return (
    <NavItem icon={<CaretIcon />}>
      <DropdownMenu />
    </NavItem>
  );
};

export default MainMenu;
