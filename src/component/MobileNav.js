import React from 'react';
import { BsChevronRight, BsArrowLeft } from "react-icons/bs";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// styles import
import { MobileNav,  Container1} from "../Styles/Components/MobileNav.styled";

const MobileNavbar = ({ isOpen, toggleMobileNav, dropdownData, navigate }) => {
    
    const [openDropdown, setOpenDropdown] = useState(null);
    const [openSubDropdown, setOpenSubDropdown] = useState(null);

    const variants = {
        open: { x: 0 },
        closed: { x: "100%" }
    };

    const handleDropdownClick = (index) => {
        setOpenDropdown(prevIndex => (prevIndex === index ? null : index));
        setOpenSubDropdown(null);
    };

    const handleSubDropdownClick = (index) => {
        setOpenSubDropdown(prevIndex => (prevIndex === index ? null : index));
    };

    useEffect(() => {
        // Disable scrolling on the entire page when the mobile navbar is open
        if (isOpen) {
            document.body.classList.add('disable-scroll');
        } else {
            document.body.classList.remove('disable-scroll');
        }

        // Clean up effect
        return () => {
            document.body.classList.remove('disable-scroll');
        };
    }, [isOpen]);



    return(

            <MobileNav 
                as={motion.div}
                // style={{ display: isOpen ? 'block' : 'none' }}
                initial="closed" // Initial animation variant
                animate={isOpen ? "open" : "closed"} // Animate based on isOpen state
                variants={variants} // Animation variants
                transition={{ duration: 0.3 }} // Animation duration
            >

                <div className="back-arrow">
                    <BsArrowLeft style={{width: '30px', marginLeft: '-10px'}} onClick={() => toggleMobileNav(false)} />
                    <p>Back</p>
                </div>

               <Container1>
                  {dropdownData.map((dropdown, index) => (
                        <React.Fragment key={index}>
                            <ul onClick={() => handleDropdownClick(index)} className="dropdownheading">
                                <li> <span>{dropdown.title}</span> <BsChevronRight style={{width: '12px'}} /> </li>
                            </ul>

                            {openDropdown === index && (
                                <ul className="dropdownlist">

                                   {dropdown.items.map((item, itemIndex) => (
                                        <ul>
                                            <li key={itemIndex} onClick={() => handleSubDropdownClick(itemIndex)} className="subdropdownheading">  <span>{item.name}</span> <BsChevronRight style={{ width: '12px' }} />
                                            </li>

                                            {openDropdown === index && openSubDropdown === itemIndex &&  (
                                                <ul className="subdropdownlist">
                                                    {dropdown.items[openSubDropdown].subItems.map((subItem, subItemIndex) => (
                                                        <li key={subItemIndex}> <span>{subItem.name}</span> <BsChevronRight style={{ width: '12px' }} /> </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </ul>   
                                   ))}

                                </ul> 
                            )}       
 
                        </React.Fragment>

                    ))}             
               </Container1>

                <div className="container2">
                    
                        <p className="head-text">General</p>
                    

                    <ul>
                        <li onClick={() => navigate('Login')}> <span>Login</span> <BsChevronRight/></li>
                        <li> <span>About us</span> <BsChevronRight/></li>
                        <li> <span>Health Hub </span><BsChevronRight/></li>
                        <li> <span>Contact</span> <BsChevronRight/></li>
                        <li> <span>Ask-a-pharmacist</span> <BsChevronRight/> </li>
                    </ul>

                </div>
            </MobileNav>
    );
}

export default MobileNavbar;