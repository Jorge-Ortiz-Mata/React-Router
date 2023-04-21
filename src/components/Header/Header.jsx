import { NavLink } from 'react-router-dom';

const Header = () => {

  return(
    <nav className="flex items-center justify-between px-5 py-3 border">
      <h3 className="font-bold text-xl">My App</h3>
      <ul className="flex items-center justify-between gap-5">
        <li className="text-sm font-semibold underline">
          <NavLink
            to="/"
            className={({isActive}) => (
              isActive
              ? 'text-red-800'
              : 'text-gray-600'
            )}
            end
          >
            Home
          </NavLink>
        </li>
        <li className="text-sm font-semibold underline">
          <NavLink
            to="/about"
            className={({isActive}) => (
              isActive
              ? 'text-red-800'
              : 'text-gray-600'
            )}
            end
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header;
