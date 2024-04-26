
import styled from "styled-components";

export const Herosection = styled.section `
  background-image: linear-gradient(to right, #E2F3F0, #FBF7F1) ;
  height: 100vh ;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  position: relative;

  @media screen and (max-width: 900px) {
      height: auto;
  }
`
export const Wrapper = styled.div `
  height: 100%;
  display: flex;
  justify-content: center; 
  align-items: center;
  // border: 1px solid red;

  .subwrapper{
    position: relative;
    width: 85%;
    // border: 1px solid blue;
    display: flex;
    justify-content: space-between;
    align-items: center; 

    .content-wrapper{
      // width: 70%;
      // max-width: 700px;

      h1{
        font-size: clamp(3.2rem, 4.5vw, 8rem);
        color: #245B51;
        font-weight: bolder;
        font-family: "Lora", serif;
      }
  
      p{
        color: #64748B;
        font-size: 1.2rem;
        margin: 20px 0;
        font-family: "Poppins", sans-serif;
      }
    }

  }

  @media screen and (max-width: 900px) {


    & .subwrapper{
      flex-direction: column;
      align-items: center;
      justify-content: center;
      // border: 1px solid blue;

      .content-wrapper{
        margin-bottom: 35px;
        

        h1{
            text-align: center;
        }
  
        p{
  
            text-align: center;
        }
      }

    }
  }
`





export const Imagewrapper = styled.div `

  width: 40%;
  height: auto;
  padding-bottom: 30%;
  // transform: rotate(45deg);
  position: relative;
  // border: 1px solid red;


  .image-border{
    border-radius: 50%;
      
    // position: relative;
  }

  img{
    
    height: auto;
    border-radius: 50%;
    position: absolute;
    border: 4px solid #DBEDEB; 
  }

  .top-image {

    width: 10%;
    top: 0;
    left: 60%;
    // transform: translate(50%, 50%);
    // transform: rotate(-45deg);
    
  }

  .right-image {
    width: 20%;
    top: 40%;
    right: 0;
    // transform: translate(50%, -50%);
    // transform: rotate(-45deg);
  }

  .bottom-image {
    width: 20%;
    bottom: 0;
    right: 35%;
    // transform: translate(-50%, 50%);
    // transform: rotate(-45deg);
  
  }

  .left-image {
    width: 35%;
    top: 25%;
    // left: 0;
    // transform: translate(-50%, -50%);
    // transform: rotate(-45deg);
  }



  @media screen and (max-width: 900px){
    margin-top: 30px; 
    margin-bottom: 100px; 
    width: 100%;
    padding-bottom: 60%;
    position: relative;

      
    .top-image {
      top: 0;
      left: 10%;
      width: 20%;


      // width: 15%;
    }

    .right-image {
      top: -15%;
      right: 10%;
      width: 15%;

    }

    .bottom-image {
      width: 20%;
      bottom: 0;
      right: 10%;
    
    }

    .left-image {
      width: 15%;
      top: 80%;
      left: 0;
      // bottom: -50%;
    }

  }
`;

