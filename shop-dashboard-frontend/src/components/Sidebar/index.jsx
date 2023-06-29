import React, { useContext, useState } from 'react';
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
} from 'reactstrap';
import './index.css';
import { routes } from '../../routes';
import Logo from '../../assets/imgs/logo.png';
import { getItem } from '../../utils/localstorage';
import { useLocation, useNavigate } from 'react-router';
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const toggle = () => setIsOpen(!isOpen);

  const router = useLocation();
  const navigate = useNavigate();
  return (
    <div className="nav-container">
      <Navbar light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto d-flex flex-column gap-3" navbar>
            <NavbarBrand href="/" className="d-flex justify-content-center">
              <img src={Logo} width="150" height="150" alt="Logo" />
            </NavbarBrand>
            {routes.map((route, index) => {
              return (
                <NavItem
                  className={
                    router.pathname === route.path
                      ? 'menuItem active'
                      : 'menuItem'
                  }
                  key={index}
                  onClick={() => setSelected(index)}>
                  <NavLink
                    onClick={() => navigate(`${route.path}`)}
                    className={`d-flex gap-3 ${
                      getItem() === 'dark' && 'dark-theme'
                    }`}>
                    <i className={route.icon}></i>
                    {route.name}
                  </NavLink>
                </NavItem>
              );
            })}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Sidebar;
