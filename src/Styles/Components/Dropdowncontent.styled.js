import styled from "styled-components"


export const Contentcontainer = styled.div `
    display: flex;
    justify-content: space-between;
    width: 60%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    position: absolute;
    background-color: #fff;
    z-index: 1;
    top: 100%;
    left: 14%;

    
    @media screen and (max-width: map-get($breakpoints, small)) {
        flex-direction: column;
        box-shadow: none;
        display: none;
    }

`


export const Subcontentcontainer1 = styled.div `
    display: flex;
    padding: 15px 0;
    width: 60%;
    // border: 1px solid red;
    // gap: 20px;

    @media screen and (max-width: map-get($breakpoints, small)) {
        flex-direction: column;
    }
`

export const Content1 = styled.ul `
    margin: 0 25px;
    li{
        list-style-type: none;
    }
    
    ul{
        li{
            padding: 5px 0;
            list-style-type: none;


            a{
                text-decoration: none;
                color: #4B5563;
            }
        }
    }

    @media screen and (max-width: map-get($breakpoints, small)) {
        ul{
            li{
                display: flex;
                justify-content: space-between;
            }
        }
    }
`

export const Content2 = styled.ul `
    // list-style: none;
    margin: 0 25px;
    text-decoration: none;

    li{
        list-style: none;
    }

    ul{
        margin-bottom: 15px;
        li{
            padding: 5px 0;
            a{
                text-decoration: none;
                color: #4B5563;
            }
        }
    }
`

export const Hr = styled.div `
    width: 1px;
    height: 100%;
    background-color: #EFEFEF;
`

 export const Subcontentcontainer2 = styled.div `

    background-image: linear-gradient(to right, #E2F3F0, #FBF7F1);
    padding-left: 15px;
    padding: 15px;
    width: 40%;

    
    span{
        font-weight: bold;
        color: #245B51;
    }

    div{
        margin: 15px 0;
        p{
            padding: 10px 0;
        }

    }

    a{
        color: #245B51;
        font-weight: bold;
    }
`

