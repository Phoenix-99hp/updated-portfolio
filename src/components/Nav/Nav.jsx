import React, {useState} from 'react'
import { StyledNavContainer, StyledNavItem, StyledNavList } from './NavStyle'
import { Link } from "gatsby"
import ResumeUpdated from "../../images/ResumeUpdated.pdf";

const Nav = ({ extraPadding }) => {

    const [clicked, setClicked] = useState(false);

    return (
        <StyledNavContainer>
            <StyledNavList extraPadding={extraPadding}>
                <Link to="/About"><StyledNavItem selected={typeof window !== "undefined" && window.location.pathname.includes("/About") ? true : false}>About</StyledNavItem></Link>
                <Link to="/Portfolio"><StyledNavItem selected={typeof window !== "undefined" && window.location.pathname.includes("/Portfolio") ? true : false}>Portfolio</StyledNavItem></Link>
                <a onClick={()=>setClicked(true)}href={ResumeUpdated} target="_blank" rel={"noopener noreferrer"}><StyledNavItem clicked={clicked}>Resume</StyledNavItem></a>
            </StyledNavList>
        </StyledNavContainer>
    )
}

export default Nav
