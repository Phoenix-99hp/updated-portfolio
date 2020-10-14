import React from 'react'
import { StyledNavContainer, StyledNavItem, StyledNavList } from './NavStyle'
import { Link } from "gatsby"
import ResumeUpdated from "../../images/ResumeUpdated.pdf";

const Nav = ({ extraPadding }) => {
    return (
        <StyledNavContainer>
            <StyledNavList extraPadding={extraPadding}>
                <Link to="/About"><StyledNavItem selected={window !== undefined && window.location.pathname === "/About" ? true : false}>About</StyledNavItem></Link>
                <Link to="/Portfolio"><StyledNavItem selected={window !== undefined && window.location.pathname === "/Portfolio" ? true : false}>Portfolio</StyledNavItem></Link>
                <a href={ResumeUpdated}><StyledNavItem>Resume</StyledNavItem></a>
            </StyledNavList>
        </StyledNavContainer>
    )
}

export default Nav
