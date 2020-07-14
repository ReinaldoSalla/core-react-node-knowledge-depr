import React, { 
  FunctionComponent
 } from 'react';
import { SidebarNavigation } from './Sidebar.styles';
import SidebarProps from './Sidebar.interfaces';

const Sidebar: FunctionComponent<SidebarProps> = ({
  isSidebarVisible
}) => {
  return (
    <SidebarNavigation>
      <ul>
        <li>a</li>
        <li>b</li>
        <li>c</li>
      </ul>
    </SidebarNavigation>
  );
};

export default Sidebar;