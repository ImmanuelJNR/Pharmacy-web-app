import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Navbar from "./Navbar"
import Navdropdown from "./Navdropdown"
import  MobileNavbar  from './MobileNav';
import { Searchinput } from './Input';
import heroimage1 from '../img/Ellipse 190 (1).svg';
import heroimage2 from '../img/Ellipse 185.svg';
import heroimage3 from '../img/Ellipse 188.svg';
import heroimage4 from '../img/Ellipse 187.svg';
import dropdownData from '../Data.json';

import {Herosection, Wrapper, Imagewrapper} from '../Styles/Components/Herostyle';

const Hero = () =>{
    const navigate = useNavigate();
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    

    const toggleMobileNav = () => {
        setIsMobileNavOpen(!isMobileNavOpen); 
    };


    return(

        <Herosection>
            <Navbar navigate={navigate} toggleMobileNav={toggleMobileNav}/>
            <MobileNavbar isOpen={isMobileNavOpen} toggleMobileNav={toggleMobileNav} dropdownData={dropdownData} navigate={navigate}/>
            {/* <MobileNavbar/> */}
            {/* <Navdropdown/> */}

            <Wrapper className='wrapper'>
                <div className='subwrapper'>
                    <div className='content-wrapper'>
                        <h1>Experts in <br/> Sustainable Health</h1>
                        <p>Online prescription service and pharmacy.</p>
                        <Searchinput placeholder='Search Treatment'/>
                    </div>

                    <Imagewrapper>

                            <img src={heroimage4} class="top-image image" alt="Top Image"/>
                            <img src={heroimage2} class="right-image image" alt="Right Image"/>
                            <img src={heroimage3} class="bottom-image image" alt="Bottom Image"/>
                            <img src={heroimage1} class="left-image image" alt="Left Image"/>
                    </Imagewrapper>
                </div>
            </Wrapper>

        </Herosection>
    )
}

export default Hero