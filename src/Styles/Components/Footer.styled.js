import styled from "styled-components";

export const Footersection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F1F5F9;
//   border: 1px solid blue;
  padding: 50px 0;
  margin-bottom: 300px;

  .footerdiv{
    width: 85%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    // border: 1px solid green;
  }

  @media screen and (max-width: 900px){
    .footerdiv{
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 90%
    }
  }
`


export const Footerwrapper1 = styled.div`
   display: flex;
   flex-direction: column;

   img{
    margin-bottom: 10px;
   }

   .textAndArrowContainer{
        // width: 30px;
        display: flex;
        align-items: center;
        color: #64748B;
        margin-bottom: 10px;
    }



    @media screen and (max-width: 900px){
        align-items: center;
        margin-bottom: 30px;
    }
`
export const Footerwrapper2 = styled.div`
   display: flex;
   justify-content: space-between;
   width: 70%;
   font-family: "Poppins", sans-serif;
   flex-wrap: wrap;

  
    ul{
        padding: 0 10px;
        margin-bottom: 20px; 
        li:first-child{
            font-weight: 500;
            color: #475569;
            font-size: 0.89rem;
        }
        li{
            list-style: none;
            margin-bottom: 10px;
            font-size: 0.8rem; 
            color: #64748B;   
        }
    }


   @media screen and (max-width: 900px){
        width: 100%;
   }

`

export const Footerdiv2 = styled.div `
  width: 85%;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #E2E8F0;

  padding-top: 30px;
//   margin-top:

  .div1{
        p{
            margin-bottom: 15px;
            color: #64748B;
            font-family: "Poppins", sans-serif; 
            font-size: 0.85rem;
        }
        div{
            display: flex;
            justify-content: space-between;
            img{
                padding-right: 20px;
                filter: grayscale(100%) hue-rotate(200deg) brightness(120%);
                // filter: brightness(120%) hue-rotate(200deg);
            }
        }
   }

  .div2{
    text-align: end;
    color: #64748B;
    font-family: "Poppins", sans-serif;
    font-size: 0.89rem;
  }


  @media screen and (max-width: 900px){
    flex-direction: column;
    width: 90%;

    .div1{
        margin-bottom: 30px; 
        // justify-content: none;
        div{
          // flex-wrap: wrap;

          img{
            margin-bottom: 20px;
            padding-right: 10px;
            width: 25%;
          }
        }
      
    }

    .div2{
        text-align: center;
    }
  }
`