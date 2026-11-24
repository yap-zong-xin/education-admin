import { NavLink } from 'react-router-dom'

function MainNav() {
    const navLinkStyles = ({ isActive }) =>
        `border-b-4 px-4 py-8 transition-all duration-200
        hover:bg-gray-100 active:scale-95 active:bg-gray-200 ${
            isActive ? 'border-primary' : 'border-transparent'
        }`

    return (
        <nav className="flex gap-2 text-sm font-semibold">
            <NavLink to="/classes" className={navLinkStyles}>
                Classes
            </NavLink>

            <NavLink to="/teachers" className={navLinkStyles}>
                Teachers
            </NavLink>
        </nav>
    )
}

export default MainNav
