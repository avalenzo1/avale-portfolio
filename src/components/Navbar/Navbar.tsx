import './navbar.css'
import { NavLink } from 'react-router-dom'
import { FaHome, FaProjectDiagram, FaInfoCircle, FaEnvelope } from 'react-icons/fa'

const links = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Projects' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' }
];

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="link-wrapper">
                    <ul>
                        {links.map((link) => (
                            <li>
                                <NavLink to={link.to} className={({ isActive }) => (isActive ? 'active-link' : '')}>
                                    <div className="icon">{getIcon(link.label)}</div>
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    )
}

function getIcon(label: string) {
    switch (label) {
        case 'Home':
            return <FaHome />;
        case 'Projects':
            return <FaProjectDiagram />;
        case 'About':
            return <FaInfoCircle />;
        case 'Contact':
            return <FaEnvelope />;
        default:
            return null;
    }
}

export default Navbar;