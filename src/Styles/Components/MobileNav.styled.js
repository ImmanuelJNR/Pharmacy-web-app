import styled, {css} from "styled-components";

export const MobileNav = styled.div `
   visibility: hidden;
   background-color: white;
   max-width: 300px;
   width: 70%;
   padding: 15px;
   height: 100vh;
   position: fixed;
   top: 0%;
   right: 0%;
   font-family: "Poppins", sans-serif;

   // Apply styles conditionally based on the isOpen prop
//    ${props => props.isOpen && css`
//        // Apply overflow: hidden; to the body element
//        body {
//            overflow: hidden;
//        }
//    `}
   

   & .back-arrow{
        display: flex;
        align-items: center;
        margin-bottom: 10px; 

        p{
            margin-left: 5px;
            font-weight: bold;
        }
   }


   & .container2{

    margin-top: 15px;

       & .head-text{
           font-weight: bold;
           color: #183A34;
           line-height: 2; 
       }

        & ul{
           list-style-type: none;


            & li{
                padding: 10px 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: #64748B;
            }
        }
   }

    @media screen and (max-width: 900px){

        z-index: 10;
        visibility: visible;
    }

`;

// This container is under MobileNav

export const Container1 = styled.div `



    & .dropdown{

    }
    & .dropdownheading{
        list-style-type: none;



        & li{
            padding: 10px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #3C9E8D;
            font-weight: bolder;
            font-size: 1rem;
        }
    }

    & .dropdownlist{

        list-style-type: none;


        & .subdropdownheading{
            padding: 10px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #64748B;
            font-weight:  600; 
            font-size: 0.89rem;
        }

        & .subdropdownlist{
            list-style: none;

            & li{
                font-size: 0.89rem;
                display: flex;
                justify-content: space-between;
                padding: 5px 0;
                align-items: center;
                color: #64748B;
            }
        }
    }

`