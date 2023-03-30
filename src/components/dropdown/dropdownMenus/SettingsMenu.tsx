import { ReactComponent as CogIcon } from "../../icons/cog.svg";
import { ReactComponent as ArrowIcon } from "../../icons/arrow.svg";
import DropdownItem from "../DropdownItem";

type SettingsMenuProps = {
  onMenuChange: (menu: string) => void;
};

const SettingsMenu: React.FC<SettingsMenuProps> = ({ onMenuChange }) => {
  return (
    <>
      <DropdownItem leftIcon={<ArrowIcon />} onMenuChange={onMenuChange} gotoMenu="main">
        Back
      </DropdownItem>
      <DropdownItem leftIcon={<CogIcon />}>Menu</DropdownItem>
    </>
  );
};

export default SettingsMenu;
