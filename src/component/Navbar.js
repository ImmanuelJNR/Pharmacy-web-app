import Logo from '../img/Group 588.svg'
import User_icon from '../img/user (1) 3.svg'
import cart from '../img/shopping-cart.svg'
import { AskPharmacist} from './UI/Button.js';
import '../scss/components/_navbar.scss';





const Navbar = ({ navigate, toggleMobileNav }) => {



    return (
        <header>
            <nav>
                <div className='nav-container1'>
                    <img src={Logo} alt='logo'/>
                </div>

                <ul className='navlist'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Health Hub</li>
                    <li>Contact</li>
                </ul>

                <div className='nav-container2'>
                    {/* <a href='#'>Login</a> */}
                    <span onClick={() => navigate('Login')}>Login</span>
                    <AskPharmacist className='pharm-btn'/>
                    <img className='cart' src={cart} alt='cart'/>
                    <img className='user-icon' src={User_icon} alt='user-icon'/>
                    <div class="hamburger-menu" onClick={toggleMobileNav}>
                        <div class="line1"></div>
                        <div class="line2"></div>
                        <div class="line3"></div>
                    </div>
                    
                </div>
            </nav>
        </header>
    );
}

export default Navbar;