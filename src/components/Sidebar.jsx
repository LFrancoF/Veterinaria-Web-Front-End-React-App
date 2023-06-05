import { useEffect } from "react";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";

function Sidebar() {

  /*Hook para activar los treeviews*/
  useEffect(() => {
    const trees = window.$('[data-widget="treeview"]');
    trees.Treeview('init');
    }, []);

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <Link to="home" className="brand-link">
        <img
          src="adminlte-react/dist/img/SLogo.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">Veterinaria S</span>
      </Link>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="adminlte-react/dist/img/user2-160x160.jpg"
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <Link to="profile" className="d-block">
              User user
            </Link>
          </div>
        </div>
        {/* SidebarSearch Form */}
        
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
            
            <NavItem title="Clientes" route="clientes" />
            <NavItem title="Especialistas" route="especialistas" />
            <NavItem title="Servicios" route="servicios" />
            <NavItem title="Consultas" route="consultas" />
            <NavItem title="Dashboard" route="dashboard" />
            
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
  );
}

export default Sidebar