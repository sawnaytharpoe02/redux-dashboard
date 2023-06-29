import { useContext, useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import './index.css';
import Profile from '../../assets/imgs/profile.png';
import { BsSun, BsMoon } from 'react-icons/bs';
import { ThemeContext } from '../../context/ThemeContext';
import { getItem, setItem } from '../../utils/localstorage';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../store/actions';
import { useNavigate } from 'react-router';

export default function CustomNavBar() {
  const { theme, setTheme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const handleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      setItem('dark');
    } else {
      setTheme('light');
      setItem('light');
    }
  };

  const hanldeLogout = () => {
    dispatch(logoutUser());
    navigate('/login');
  };
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const { user } = useSelector((state) => state.auth);

  return (
    <div className="d-flex mt-3 justify-content-end align-items-center gap-3">
      {getItem() === 'light' ? (
        <BsMoon className="fs-5 theme-icon" onClick={handleTheme} />
      ) : (
        <BsSun className="fs-4 theme-icon" onClick={handleTheme} />
      )}
      <img src={Profile} width="50" height="50" alt="Logo" />
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={'down'}>
        <DropdownToggle className="custom-toggle">
          <span>{user?.username}</span>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={hanldeLogout}>Log out</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
