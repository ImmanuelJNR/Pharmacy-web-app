import Googlelogo from '../../img/icons8-google-logo.svg'

import { BsChevronDown } from 'react-icons/bs'

import { Askbutton, Dropdownbutton, Formbutton, Searchbutton, Gbutton } from '../../Styles/Components/Btn.styled';



export const AskPharmacist = () => {
    return (
        <Askbutton className='ask-a-pharmacist'>Ask a Pharmacist</Askbutton>
    );
};

// export const OrderNow = () => {
//     return (
//         <button className='order-now'>Order Now</button>
//     );
// };

// export const ViewArticles = () => {
//     return (
//         <button className='view-article'>View More Articles</button>
//     );
// };


export const Formbtn = ({buttonText}) => {
    return (
        <Formbutton className='form-btn'>{buttonText}</Formbutton>
    );
};

export const GoogleBtn = ({buttonText}) => {
    return (
        <Gbutton className='googlebtn'>{buttonText} <img src={Googlelogo}/> </Gbutton>
    );
};

export const Dropdownbtn = ({ buttonText, onClick }) => {
    return (
        <Dropdownbutton className='dropdownbtn'>{buttonText}<BsChevronDown className='chevron-icon'/> </Dropdownbutton>
    );
};

export const Searchbtn = () => {
    return (
        <Searchbutton className='search'>Search</Searchbutton>
    );
};
