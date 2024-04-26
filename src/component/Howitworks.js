import { Howitworkscontainer, Workcontainer, Workwrapper } from "../Styles/Components/HowItworks.styled";

import icon1 from '../img/12.svg';
import icon2 from '../img/13.svg';
import icon3 from '../img/14.svg';

const HowItWorksSection = () => {
    return(       
        <Howitworkscontainer>
            <Workcontainer>
                <div className="headerAndTextWrapper">
                    <h4>How it Works</h4>
                    <p>Our service works in just three simple steps.</p>
                </div>
                <Workwrapper>
                    <div>
                        <img src={icon1} alt="Icon"/>
                        <span>Choose Your Treatment</span>
                        <p>Search for your medication, condition, or Ask-a-Pharmacist if you need help or advice about your health.</p>
                    </div>
                    <div>
                        <img src={icon2} alt="Icon"/>
                        <span>Complete a Questionaire</span>
                        <p>Answer a quick questionnaire about your health and our prescribers will ensure that the medication is safe for you.</p>
                    </div>
                    <div>
                        <img src={icon3} alt="Icon"/>
                        <span>Delivered to your door</span>
                        <p>Your medication is dispensed from our UK Pharmacy and delivered to you by Royal Mail in recyclable packaging.</p>
                    </div>
                </Workwrapper>
            </Workcontainer>
        </Howitworkscontainer>
    )
}

export default HowItWorksSection;