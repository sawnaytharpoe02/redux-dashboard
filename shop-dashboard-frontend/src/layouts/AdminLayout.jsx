import { Outlet } from 'react-router';
import Sidebar from '../components/Sidebar';
import { Col, Row } from 'reactstrap';
import { ThemeContext } from '../context/ThemeContext';
import { useState } from 'react';
import './adminLayout.css';
import CustomNavBar from '../components/Navbar';
import { getItem } from '../utils/localstorage';

export default function AdminLayout() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Row
        className={`container-fluid main-layout d-flex justify-content-between  ${
          getItem() === 'dark' ? 'dark-theme' : ''
        }`}>
        <Col md={3}>
          <Sidebar />
        </Col>
        <Col md={9} className="dashboard-col">
          <CustomNavBar className="dashboard-nav" />
          <Outlet />
        </Col>
      </Row>
    </ThemeContext.Provider>
  );
}
