import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <ul className="color-bar">
      <NavLink to="/rgb/213/155/69">
        <li className="mustard">mustard</li>
      </NavLink>
      <NavLink to="/rgb/104/158/216">
        <li className="periwinkle">periwinkle</li>
      </NavLink>
      <NavLink to="/rgb/129/134/74">
        <li className="olive">olive</li>
      </NavLink>
    </ul>
  );
}
