import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import './SidebarNavLink.css';

interface SidebarNavLinkProps {
  icon: IconDefinition;
  title: string;
  to: string;
  classNameIcon?: string;
  classNameTitle?: string;
}

const SidebarNavLink: FunctionComponent<SidebarNavLinkProps> = ({
  icon,
  title,
  to,
  classNameIcon,
  classNameTitle,
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
    >
      <FontAwesomeIcon icon={icon} className={classNameIcon} />
      <span className={classNameTitle}>{title}</span>
    </NavLink>
  );
};

export default SidebarNavLink;
