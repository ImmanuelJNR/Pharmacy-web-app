import { Dropdownbtn } from "./UI/Button"
import '.././scss/components/_navdropdown.scss'
import { Dropdowncontent } from "./UI/Dropdowncontent"

const Navdropdown = () => {

    return (
        <div className="container">

           <div className="sub-container">

                <p>Categories :</p>
                <div className="wrapper">
                <Dropdownbtn buttonText="Men's Health"/>
                {/* <Dropdowncontent/> */}
                </div>
                <div className="wrapper">
                <Dropdownbtn buttonText="Women's Health"/>
                {/* <Dropdowncontent/> */}
                </div>
                <div className="wrapper">
                <Dropdownbtn buttonText="General Health"/>
                {/* <Dropdowncontent/> */}
                </div>
                <div className="wrapper">
                <Dropdownbtn buttonText="Sexual Health"/>
                </div>
           </div>

           <Dropdowncontent/>

        </div>
    )
}

export default Navdropdown;
