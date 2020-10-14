import styled, { css } from "styled-components"

export const StyledNavContainer = styled.nav`
height: 80px;
position: fixed;
width: 100%;
bottom: 0;
background-color: #070707;
display: flex;
justify-content: center;
align-items: center;
@media screen and (max-width: 600px) {
    position: relative;
    height: 100%;
}`

export const StyledNavList = styled.ul`
display: flex;
width: 80%;
max-width: 1350px;

@media screen and (max-width: 600px) {
    flex-wrap: wrap;
    padding-bottom: 40px;
    // padding-top: 20px;
    ${props => props.extraPadding && css`
    padding-top: 40px;
`}
    
    > a:nth-of-type(2) {
        margin: 10px 0;
     }
}

> a {
    margin: 0 auto;
    text-decoration: none;
    @media screen and (max-width: 600px) {
        flex: 1 1 100%;
    }
}
`

export const StyledNavItem = styled.li`
display: flex;
justify-content: center;
align-items: center;
width: 150px;
height: 50px;
margin: 0 auto;
color: white;
border: 1px solid white;
cursor: pointer;
border-radius: 3px;
border: 2px solid #F834BB;
// yellow "#DFF959",
// pink "#F834BB",
// blue "#2BF5E9",
// pink "#D831D7"
font-size: 25px;
font-family: "Montserrat";
${props => props.selected === true && css`
    background-color: #F834BB;
`}
@media screen and (max-width: 600px) {
    width: 100%;
    // margin: 10px 0;
}

&:hover {
    background-color: #F834BB;
}
`