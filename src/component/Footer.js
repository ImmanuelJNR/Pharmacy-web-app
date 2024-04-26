import Logo from '../img/Group 588.svg';
import footerImg1 from '../img/GPHC-Registered-Pharmacy-Number.svg';
import footerImg2 from '../img/PayPal 1.svg'
import footerImg3 from '../img/Group 536.svg'
import footerImg4 from '../img/Group 238.svg'
import { FaArrowRight,  } from 'react-icons/fa';
import {FiTwitter, FiFacebook, FiInstagram} from 'react-icons/fi';
import {Footersection, Footerwrapper1, Footerwrapper2, Footerdiv2} from '../Styles/Components/Footer.styled'

const Footer = () => {
    return(
        <Footersection>
            <div className='footerdiv'>
                    <Footerwrapper1>
                        <img src={Logo} alt='logo'/>
                        <div className='textAndArrowContainer'>
                         <p>Chat</p>
                         <FaArrowRight style={{transform: 'rotate(-45deg)'}}/>
                        </div>
                        <div className='textAndArrowContainer'>
                         <p>hello@e-Surgery.com</p>
                         <FaArrowRight style={{transform: 'rotate(-45deg)'}}/>
                        </div>
                        <div className='icons-container'>
                            <FiFacebook style={{marginRight: '10px' }}/>
                            <FiInstagram style={{marginRight: '10px' }} />
                            <FiTwitter style={{marginRight: '5px' }} />
                        </div>
                    </Footerwrapper1>

                    <Footerwrapper2>
                        {/* <div className='wrap'> */}
                            <ul>
                                <li>About</li>
                                <li>About us</li>
                                <li>How to Order</li>
                                <li>My Account</li>
                            </ul>
                            <ul>
                                <li>Resources</li>
                                <li>Health Hub</li>
                                <li>Customer FAQ's</li>
                                <li>Delivery Information</li>
                            </ul>
                        {/* </div> */}
                        {/* <div className= 'wrap'> */}
                            <ul>
                                <li>Policies</li>
                                <li>Refund and Returns Policy</li>
                                <li>GDPR</li>
                                <li>Privacy Policy</li>
                            </ul>
                            <ul>
                                <li>Terms</li>
                                <li>Regulation</li>
                                <li>Terms and conditions</li>
                            </ul>
                        {/* </div> */}
                    </Footerwrapper2>
            </div>
            <Footerdiv2>
                <div className='div1'>
                    <p>Regulated By</p>
                    <div>
                        <img src={footerImg1} alt='footericon'/>
                        <img src={footerImg2} alt='footericon'/>
                        <img src={footerImg3} alt='footericon'/>
                        <img src={footerImg4} alt='footericon'/>
                    </div>
                </div>

                <div className='div2'>
                    <p>Registered Pharmacy Number: 9010968 <br/>
                    © Total Access Health LTD. All rights reserved.
                    </p>
                </div>
            </Footerdiv2>
        </Footersection>
    )
}

export default Footer;