import styled from "styled-components";


export const Searchinputcontainer = styled.div`

    display: flex;
    width : 100%;
    max-width: 400px;
    background-color: white;
    // margin-top: 20px;
    font-family: "Poppins", sans-serif;

    & .search-icon {
        color: #475569; 
        align-self: center;
        margin-left: 5px;
    }

    & input{
        flex: 1;
        border: none;
        outline: none
        font-size: 0.87rem;
        color: #475569;
        padding-left: 5px;



        &:focus{
        outline: none;
        }
    }

`

export const Inputcontainer = styled.div `
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    font-family: "Poppins", sans-serif;

    label{
        color: #404B4F;
        font-weight: bold;
        line-height: 2;
        
    }

    input{
        width: 100%;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 10px;
        font-size: 0.8rem;
        border-radius: 7px;
        background-color: #F4F5F7;
        border: 1px solid transparent;
        outline: none;
        

    }

    input:focus {
        outline: none;
        border: 2px solid #FDD253;
    
    }
`