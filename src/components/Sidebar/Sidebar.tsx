import { FunctionComponent } from 'react';
import './Sidebar.css';

interface SidebarProps {
  className?: string;
}

const Sidebar: FunctionComponent<SidebarProps> = ({ className }) => {
  //#region [render]
  return (
    <div className={className}>
      <div className="sidebar">Sidebar</div>
    </div>
  );
  //#endregion
};

export default Sidebar;
