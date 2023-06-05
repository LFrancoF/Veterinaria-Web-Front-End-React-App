import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            className="nav-link"
            data-widget="pushmenu"
            to="#"
            role="button"
          >
            <i className="fas fa-bars" />
          </Link>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link to="home" className="nav-link">
            Inicio
          </Link>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link to="profile" className="nav-link">
            Perfil
          </Link>
        </li>
      </ul>
      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto">
        {/* Navbar Search */}
        <li className="nav-item">
          <Link
            className="nav-link"
            data-widget="navbar-search"
            to="#"
            role="button"
          >
            <i className="fas fa-search" />
          </Link>
          <div className="navbar-search-block">
            <form className="form-inline">
              <div className="input-group input-group-sm">
                <input
                  className="form-control form-control-navbar"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <div className="input-group-append">
                  <button className="btn btn-navbar" type="submit">
                    <i className="fas fa-search" />
                  </button>
                  <button
                    className="btn btn-navbar"
                    type="button"
                    data-widget="navbar-search"
                  >
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link"
            data-widget="fullscreen"
            to="#"
            role="button"
          >
            <i className="fas fa-expand-arrows-alt" />
          </Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link" data-toggle="dropdown" href="#">
            <i className="fas fa-th-large" />
          </a>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <span className="dropdown-item dropdown-header">Opciones</span>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              <i className="fas fa-users mr-2" /> Perfil
              <span className="float-right text-muted text-sm">3 mins</span>
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              <i className="fas fa-file mr-2" /> Reportes
              <span className="float-right text-muted text-sm">2 days</span>
            </a>
            <div className="dropdown-divider" />
            <a href="#" className="dropdown-item">
              <i className="fas fa-file mr-2" /> Acerca del Proyecto
              <span className="float-right text-muted text-sm">12 hours</span>
            </a>
            <div className="dropdown-divider" />
            <Link to="home" className="dropdown-item dropdown-footer">
              Logout
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
