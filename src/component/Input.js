import React, { forwardRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import { Searchbtn } from './UI/Button';

import { Searchinputcontainer, Inputcontainer } from '../Styles/Components/Input.styled';

 export const Searchinput = ({placeholder}) =>{

    return(
        <Searchinputcontainer>
            <BsSearch className='search-icon' />
            <input placeholder={placeholder} />
            <Searchbtn/>
        </Searchinputcontainer>
    )
}

export const Input = forwardRef(({ label, type, name, ...rest }, ref) => {
    return (
        <Inputcontainer className='input-wrapper'>
            <label htmlFor={name}>{label}</label>
            <input ref={ref} type={type} name={name} {...rest} />
        </Inputcontainer>
    );
});
