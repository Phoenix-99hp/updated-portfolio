import styled from "styled-components"

export const StyledHero = styled.h1`
color: white;
font-size: 100px;
display: flex;
justify-content: center;
align-items: center;
// position: relative;

> span {
    margin-bottom: 80px;
    border-radius: 10px;
    z-index: 99;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: #070707;
    padding: 20px;
    border: 4px solid #2BF5E9;
    // yellow "#DFF959",
    // pink "#F834BB",
    // blue "#2BF5E9",
    // pink "#D831D7"
    font-family: "Montserrat";
    // max-width: 352px;

    @media screen and (max-width: 600px) {
        margin-bottom: 0;
    }

    @media screen and (max-width: 360px) {
        font-size: 70px;
    }

    // > h1 {
    //     width: fit-content;
    //     margin: 0 auto;
    // }

    // > span:last-of-type {
    //     font-size: 20px;
    // }
}`