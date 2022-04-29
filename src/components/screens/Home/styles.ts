import styled from "styled-components";

export const Card = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: flex-start;
    align-items:center;
    padding:48px;
    background-color: #c2fbd7;
    color:black;
    height:40rem;
    width:40rem;
    border-top: 8px solid #c2fbd7;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in;
    &:hover{
        border-top: 8px solid #00CC00;
    }

`
export const CardContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
`

