import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

const Header = () => {
  const { isLoggedIn, credits } = useSelector((state) => state.auth);
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={isLoggedIn ? '/surveys' : '/'} className="left brand-logo">
          Emaily
        </Link>
        <ul className="right">
          {isLoggedIn && (
            <>
              <li key="1">
                <Payments />
              </li>
              <li key="4" style={{ margin: '0 10px' }}>
                Credits: {credits}
              </li>
              <li key="2">
                <a href="/api/logout">Logout</a>
              </li>
            </>
          )}
          {!isLoggedIn && (
            <li key="3">
              <a href="/auth/google">Login With Google</a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
