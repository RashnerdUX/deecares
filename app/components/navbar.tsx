import { useState } from "react"
import { Link, NavLink } from "react-router"
import { LuMenu } from 'react-icons/lu'
import { MdOutlineClose } from "react-icons/md"

const Navbar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

    const openMobileMenu = () => {
        setIsMobileMenuOpen(true)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }

    interface NavLinkProps {
        path: string,
        name: string,
    }

    const navLinks: NavLinkProps[] = [
        {
            path: "/",
            name: "Home"
        },
        {
            path: "/programs",
            name: "Our Programs"
        },
                {
            path: "/impact",
            name: "Impact"
        },
                {
            path: "/about-us",
            name: "About Us"
        },
                {
            path: "/volunteer",
            name: "Volunteer"
        },
        {
            path: "/resources",
            name: "Resources"
        },
    ]


    return (
        <>
            <nav className="w-full max-w-300">
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center justify-between">
                    <Link to="/">
                        <img src="/logo/deecares-logo.svg" alt="The logo for DeeCares Foundation. Leads you to the homepage" className="h-40 w-auto"/>
                    </Link>
                    <div className="flex gap-8 items-center">
                        {navLinks.slice(1).map((link, index) => (
                            <NavLink 
                                key={index}
                                to={link.path}
                                className={({isActive}) => (isActive ? "navlink active" : "navlink")}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                    <div className="px-8">
                        <button className="pill-button bg-primary text-primary-foreground px-6 py-3 font-label-lg text-label-lg scale-95 transition-transform duration-150 active:scale-90"> Donate Now</button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden flex justify-between items-center">
                    <Link to={"/"}>
                        <img src="/logo/deecarea-icon-logo.svg" alt="The Icon for DeeCares logo" className="h-20 w-auto"/>
                    </Link>
                    <button type='button' onClick={openMobileMenu}>
                        <LuMenu size={24} />
                    </button>
                </div>
                
                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm bg-opacity-50 z-50">
                        <div className="bg-surface max-w-full min-h-screen p-6 relative flex flex-col justify-between">
                            {/* Cancel button row */}
                            <div className="flex justify-end items-center">
                                <button type="button" onClick={closeMobileMenu}><MdOutlineClose size={32} /></button>
                            </div>
                            <div className="flex my-6 px-2 flex-col items-center text-center">
                                <ul className="space-y-6 text-2xl font-medium">
                                    {navLinks.map((link, index) => {
                                        return <li key={index}><MobileNavLink path={link.path} name={link.name} func={closeMobileMenu} /></li>
                                    })}
                                </ul>
                            </div>
                            {/* End row */}
                            <div className="flex flex-col gap-2 text-center items-center">
                                <p className="text-sm text-foreground/80 font-semibold">© 2026 DeeCares Foundation</p>
                                <div className="flex gap-4 text-sm text-foreground">
                                    <a className="underline" href="#">Privacy Policy</a>
                                    <a className="underline" href="#">Terms of Service</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </>
    )
}

export default Navbar;

interface MobileNavLinkProps {
    path: string,
    name: string,
    func?: () => void,
}

const MobileNavLink = ({name, path, func}: MobileNavLinkProps) => {
    return (
        <NavLink to={path} className={({isActive}) => isActive ? "mobile-navlink active" : "mobile-navlink"} onClick={func} >{name}</NavLink>
    );
}