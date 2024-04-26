import { Content1, Content2, Contentcontainer, Hr, Subcontentcontainer1, Subcontentcontainer2 } from "../../Styles/Components/Dropdowncontent.styled";


export const Dropdowncontent = () => {

    return(

        // <div className='dropdowncontent-container'>
            <Contentcontainer className='content-container'>

                <Subcontentcontainer1>
                
                    <Content1 class="content1">
                        <li>
                            <a>Erectile Dysfunction</a>
                        </li>

                        <ul>
                            <li><a href="#">Viagra</a></li>
                            <li><a href="#">Sildenafill</a></li>
                            <li><a href="#">Tadalafill</a></li>
                            <li><a href="#">Viagra Connect</a></li>
                            <li><a href="#">Vardenafill</a></li>
                            <li><a href="#">Tadalafill once Daily</a></li>
                            <li><a href="#">Spedra</a></li>
                            <li><a href="#">Levitra</a></li>
                            <li><a href="#">Cialis Once Daiily</a></li>
                        </ul>
                    </Content1>

                    <Hr className='hr'></Hr>


                    <Content2 class="content2">
                        <li>Premature</li>
                        <ul>
                            <li><a href="#">Priligy</a></li>
                        </ul>

                        <li>Hair Loss</li>
                        <ul>
                            <li><a href="#">Finasteride</a></li>
                        </ul>
                    </Content2>
                </Subcontentcontainer1>

                <Subcontentcontainer2 class="sub-content-container2">
                    <span>Mens Health Blog</span>
                    <div>
                        <p>acne in men : causes, symptoms, and treatments that work.</p>
                        <p>The truth about generic Viagra. </p>
                        <p>Can Covid cause problems in the bedroom?</p>
                        <p>Here's how to prevent Premature Ejaculation.</p>
                        <p>How to talk about Erectile Dysfunction with your partner. </p>
                        <p>Be aware: List of fake ED pills sold in the UK. </p>
                    </div>

                    <a href='#'>More Blog Articles</a>
                </Subcontentcontainer2>
            </Contentcontainer>
        // </ div>
    );
}
