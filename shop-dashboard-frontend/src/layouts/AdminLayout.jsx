import { Outlet } from 'react-router';
import Sidebar from '../components/Sidebar';
import { Col, Row } from 'reactstrap';
import { ThemeContext } from '../context/ThemeContext';
import { useState } from 'react';
import './adminLayout.css';
import CustomNavBar from '../components/Navbar';
import { getItem } from '../utils/localstorage';
import { useDispatch, useSelector } from 'react-redux';
import Login from '../pages/Login';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { hideToast } from '../store/actions';

export default function AdminLayout() {
  const [theme, setTheme] = useState('light');
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { showToast, toastMessage } = useSelector((state) => state.toast);
  if (showToast) {
    toast.success(toastMessage);
    dispatch(hideToast());
  }

  // useEffect(() => {
  //   if (showToast) {
  //     toast.success(toastMessage);
  //     dispatch(hideToast());
  //   }
  // }, [showToast]);

  return user !== null ? (
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
  ) : (
    <Login />
  );
}
