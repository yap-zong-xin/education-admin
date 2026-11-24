import { Link } from 'react-router-dom'

import Logo from './Logo'
import MainNav from './MainNav'

function Header() {
    return (
        <div className="flex items-center gap-18 bg-white px-12 text-primary shadow-md">
            <Link to="/">
                <Logo />
            </Link>
            <MainNav />
        </div>
    )
}

export default Header
