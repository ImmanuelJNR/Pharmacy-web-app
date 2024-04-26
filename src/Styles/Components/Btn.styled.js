
import styled from 'styled-components'; 

export const Askbutton = styled.button `
    background-color: transparent;
    border: 1px solid #328577;
    border-radius: 5px;
    display: inline-flex;
    padding: 10px 20px;
    // align-items: flex-start;
    // gap: 5px;
    // margin: 50px;
    // text-decoration: none;
    color: #328577;
    cursor: pointer;
    font-family: "Poppins", sans-serif;

    @media screen and (max-width: 900px) {
        display: none;
    }
`

// .order-now{
//     background-color: #FCD253;
//     border: none;
//     border-radius: 5px;
//     display: inline-flex;
//     padding: 15px 20px;
//     color: #328577;
//     cursor: pointer;
// }
// .view-article{

//     background-color: transparent;
//     border: 1px solid #328577;
//     border-radius: 5px;
//     display: inline-flex;
//     padding: 15px 20px;
//     color: #328577;
//     cursor: pointer;
// }

export const Formbutton = styled.button`
    background-color: #FDD253;
    border: none;
    border-radius: 5px;
    width: 100%;
    padding: 10px 0;
    margin: 15px 0;
    color: #245B51;
    font-weight: bold;
    cursor: pointer;
    font-family: "Poppins", sans-serif;
`

export const Gbutton = styled.button `
    background-color: transparent;
    border: 2px solid #FDD253;
    border-radius: 5px;
    width: 100%;
    padding: 10px 0;
    margin-bottom: 15px ;
    color: #245B51;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-family: "Poppins", sans-serif;

    img{
        width: 20px;
    }
`

export const Dropdownbutton = styled.button`
    background-color: transparent;
    border: 1px solid #328577;
    border: 1px solid #64748B;
    border-radius: 5px;
    display: flex;
    margin: 8px 10px;
    gap: 5px;
    padding: 10px 20px;
    // color: #328577;
    color: #64748B;
    cursor: pointer;
    font-family: "Poppins", sans-serif;
    // font-weight: 600;


`

export const Searchbutton = styled.button`
    background-color: #FCD253;
    border: none;
    padding: 12px 20px;
    color: #328577;
    cursor: pointer;
    font-family: "Poppins", sans-serif;
`