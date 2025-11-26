import './Header.css'
import {Nav} from "../index";
import { FaXing } from "react-icons/fa";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import {useState} from "react";

function Header(props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    
    return (
        <header className="header">
            <div className="container">
                <div className="header-wrapper">
                    <a href="" className="logo">Ilay</a>
                    <Nav isMenuOpen={isMenuOpen}/>
                    <div className="nav-menu-btn" onClick={toggleMenu}>
                        {isMenuOpen ? <FaXing/> : <HiOutlineMenuAlt1/>}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;