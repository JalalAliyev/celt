import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineLeft } from 'react-icons/ai';
import { sidebarElement as elements } from '../../utils/sidebar-elements';

import './sidebar.style.scss';
import {
  changeSidebarVisibility,
  changeSidebarInVisible,
} from '../../store/interface-slice';

const Sidebar = (props) => {
  const { isSidebarVisible } = useSelector((state) => state.interface);
  const dispatch = useDispatch();

  return (
    <div className="sidebar" style={props.style}>
      <div className="sidebar__logo">
        <h1>
          <span>CELT</span>ENGLISH
        </h1>
        {isSidebarVisible && (
          <div
            onClick={() => dispatch(changeSidebarVisibility())}
            className="sidebar__logo-icon">
            {' '}
            <AiOutlineLeft />
          </div>
        )}
      </div>
      <div className="sidebar__navlinks">
        {elements.map(({ id, href, Icon, parag }) => (
          <NavLink
            key={id}
            to={href}
            onClick={() => dispatch(changeSidebarInVisible())}>
            <Icon /> {parag}
          </NavLink>
        ))}
      </div>
      {/* 
      <div className="sidebar__account">
        <h2>ACCOUNT</h2>
        <NavLink to="/student/edit-profile">
          <BsFillPersonFill /> Edit Profile
        </NavLink>
      </div> */}
    </div>
  );
};

export default Sidebar;
