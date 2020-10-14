import styled from "styled-components";

export const PortfolioContainer = styled.div`
padding: 0 10px;
width: 100%;
// min-height: calc(100vh - 80px);
display: flex;
align-self: center;
justify-content: center;
align-items: center;
padding-top: 40px;
padding-bottom: 40px;
font-family: "Montserrat";
flex-wrap: wrap;
@media screen and (max-width: 600px) {
    padding-bottom: 0;
}

> div {
    align-self: flex-start;
    width: 100%;
    flex: 1 1 100%;
    text-align: center;
}`

export const PortfolioProject = styled.div`
color: white;
max-width: 300px;
margin: 0 auto;
text-align: center;
padding: 20px;
border: 3px solid #2BF5E9;
margin-bottom: 20px;
border-radius: 10px;
flex: 1 1 100%;

&:last-of-type {
    margin-bottom: 0;
}

> a {
    display: block;
    color: #F834BB;
    cursor: pointer;
    text-decoration: none;
    width: fit-content;
    margin: 0 auto;

    > span:hover {
        text-decoration: underline;
    }

    // > span {
    //     color: white;
    // }
}

> a:first-of-type {
    padding: 10px 0;
}

> h1 {
    font-size: 30px;
    font-family: "Montserrat";
}`

export const ProjectsTitle = styled.h1`
width: fit-content;
font-size: 50px;
color: white;
text-align: center;
margin: 0 auto;
margin-bottom: 40px;
font-weight: bold;
// margin-top: 40px;
padding-bottom: 5px;
font-family: "Montserrat";
border-bottom: 3px solid #DFF959;
@media screen and (max-width: 430px) {
    font-size: 40px;
}`

export const StyledDisclaimerContainer = styled.div`
max-width: 300px;
margin: 0 auto;
margin-bottom: 40px;`

export const StyledDisclaimer = styled.span`
    color: white;
    align-self: center;
    line-height: 22px;
    `

    export const Asterisk = styled.span`
    color: white;
    pointer-events: none;
    cursor: default;
    `