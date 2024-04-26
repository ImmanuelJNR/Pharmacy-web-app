import styled from "styled-components";

export const Howitworkscontainer = styled.section `
  display: flex;
  justify-content: center;
  // align-item: center;
  background-color;
  background-color: #DBEDEB;
  font-family: "Poppins", sans-serif;
  height: auto;


`

export const Workcontainer = styled.div ` 
  width: 85%;
  background-color: #ffff;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // position: absolute;
  z-index: 1;
  
  
  margin-top: -50px;
  margin-bottom: 50px;

  .headerAndTextWrapper{
    width: 85%;
    // border: 1px solid red;
    text-align: center;
    margin-bottom: 30px;

    h4{
      color: #183A34;
      font-size: 1.2rem;
      margin-bottom: 10px;
    }

    p{
      color: #6E7C80;
      font-size: 0.89rem;
    }
  }

  @media screen and (max-width: 900px){
    width: 90%
  }

`

export const Workwrapper = styled.div `
  display: flex;
  justify-center: space-between;

  padding: 0 15px;
  
  & div:nth-child(2) {
    border-left: 1px solid #E2E8F0;
    border-right: 1px solid #E2E8F0;
  }

  div{
    width: 40%;
    text-align: center;
    padding: 0 25px;
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      width: 20%;
      margin-bottom: 15px;
    }

    span{
      color: #404B4F;
      font-weight: 400;
      margin-bottom: 20px
    }

    p{
      color: #6E7C80;
      font-size: 0.89rem;
    }
  }

  @media screen and (max-width: 900px){
    flex-direction: column;

    & div:nth-child(2) {
      border-left: none;
      border-right: none;
    }

    div{
      width: 100%;
      border-top: 1px solid #E2E8F0;

      padding: 30px 10px;

      span{
        margin-bottom: 10px
      }
    }
  }
`