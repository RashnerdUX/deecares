import { useState } from "react"
import { Link, NavLink } from "react-router"
import { useNavigate } from "react-router"
import { LuMenu } from 'react-icons/lu'

const Navbar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
    const navigate = useNavigate()

    const openMobileMenu = () => {
        setIsMobileMenuOpen(true)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }


    return (
        <>
            <nav className="w-full max-w-300">
                {/* Desktop Menu */}
                <div className="hidden md:flex items-center justify-between">
                    <Link to="/" className="text-headline-md font-headline-md font-bold text-primary"> Deecares Foundation </Link>
                    <div className="flex gap-8 items-center">
                        <NavLink to={"/"} className="navlink">Our Programs</NavLink>
                        <NavLink to={"/"} className="navlink">Impact</NavLink>
                        <NavLink to={"/"} className="navlink">About Us</NavLink>
                        <NavLink to={"/"} className="navlink">Volunteer</NavLink>
                        <NavLink to={"/"} className="navlink">Resources</NavLink>
                    </div>
                    <div className="px-8">
                        <button className="pill-button bg-primary text-primary-foreground px-6 py-3 font-label-lg text-label-lg scale-95 transition-transform duration-150 active:scale-90"> Donate Now</button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden flex justify-between items-center">
                    <div className="text-2xl font-bold" onClick={() => navigate('/')}>Deecares</div>
                    <button type='button' onClick={openMobileMenu}>
                        <LuMenu size={24} />
                    </button>
                </div>
                
                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div>

                    </div>
                )}
            </nav>
        </>
    )
}

export default Navbar;