import { ReactComponent as CogIcon } from "../../icons/cog.svg";
import DropdownItem from "../DropdownItem";

type MainMenuProps = {
  onMenuChange: (menu: string) => void;
};

const MainMenu: React.FC<MainMenuProps> = ({ onMenuChange }) => {
  return (
    <>
      <DropdownItem>Main</DropdownItem>
      <DropdownItem leftIcon={<CogIcon />} gotoMenu={"settings"} onMenuChange={onMenuChange}>
        Settings
      </DropdownItem>
    </>
  );
};

export default MainMenu;
