import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  return (
    <div className="layout">
      {/* Breadcrumb Navigation */}
      <nav className="breadcrumb">
        <Link to="/">Home</Link>
        {pathSegments.map((segment, index) => {
          const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const isLast = index === pathSegments.length - 1;
          
          return (
            <React.Fragment key={path}>
              <span className="breadcrumb-separator">›</span>
              {isLast ? (
                <span className="breadcrumb-current">{segment}</span>
              ) : (
                <Link to={path}>{segment}</Link>
              )}
            </React.Fragment>
          );
        })}
      </nav>

      <div className="layout-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;