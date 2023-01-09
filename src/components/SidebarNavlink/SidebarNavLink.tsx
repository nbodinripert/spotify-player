import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './SidebarNavLink.css';

interface SidebarNavLinkProps {
  classNameIcon?: string;
  classNameTitle?: string;
  icon?: IconDefinition;
  title: string;
  to: string;
}

const SidebarNavLink: FC<SidebarNavLinkProps> = ({
  icon,
  title,
  to,
  classNameIcon,
  classNameTitle,
}) => {
  //#region [render]
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
    >
      {icon && <FontAwesomeIcon icon={icon} className={classNameIcon} />}
      <span className={classNameTitle}>{title}</span>
    </NavLink>
  );
  //#endregion
};

export default SidebarNavLink;
