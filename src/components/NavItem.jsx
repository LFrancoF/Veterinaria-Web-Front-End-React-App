import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


function NavItem({title, route}) {
  return (
    <li className="nav-item">
        <Link to={route}>
          <div className="nav-link">
            <i className="nav-icon fas fa-th" />
            <p>{title}</p>
          </div>
        </Link>
    </li>
  );
}

NavItem.propTypes = {
  title : PropTypes.string,
  route : PropTypes.string
}

export default NavItem;
