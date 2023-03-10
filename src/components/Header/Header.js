import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <nav className="nav-bar">
      <ul className="color-bar">
        <NavLink to="/rgb/213/155/69" className="mustard">
          <li>mustard</li>
        </NavLink>
        <NavLink to="/rgb/201/214/255" className="periwinkle">
          <li>periwinkle</li>
        </NavLink>
        <NavLink to="/rgb/129/134/74" className="olive">
          <li>olive</li>
        </NavLink>
        <NavLink to="/rgb/179/86/66" className="terracotta">
          <li>terracotta</li>
        </NavLink>
      </ul>
    </nav>
  );
}
