import React, { useState } from 'react';
import myPicture from "../../images/real2.png";
import { SectionContainer, StyledBox, SpecsKey, Technical, AboutContainer, AboutCopyContainer, AboutCopy, StyledLazyLoad } from "./AboutStyle"

const AboutSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <SectionContainer>
            <AboutContainer>
                <StyledLazyLoad
                    width={200}
                    height={178}
                    isVisible={isVisible}
                >
                    <img
                        src={myPicture}
                        onLoad={() => setIsVisible(true)}
                    />
                </StyledLazyLoad>
                <AboutCopyContainer>
                    <AboutCopy>
                        Hi, I'm Drake McGarrah. I am a full-stack web developer primarily experienced with the MERN
                        (MongoDB, Express, React, Node.js) stack. For me it's all about the code - I enjoy taking people's designs and web page ideas and turning them into reality.
                    </AboutCopy>
                </AboutCopyContainer>
            </AboutContainer>
            <Technical>
                <h1>Technical Specs</h1>
                <ul>
                    <li>HTML<span>&#x2705;</span></li>
                    <li>CSS<span>&#x2705;</span></li>
                    <li>JavaScript<span>&#x2705;</span></li>
                    <li>React<span>&#x2705;</span></li>
                    <li>Node.js<span>&#x2705;</span></li>
                    <li>Express<span>&#x2705;</span></li>
                    <li>MongoDB<span>&#x2705;</span></li>
                    <li>GraphQL<div></div></li>
                    <li>Redux<div></div></li>
                    <li>SQL<div></div></li>
                </ul>
                <SpecsKey>
                    <span><div>&#x2705;</div>= Firm Grasp</span>
                    <span><StyledBox />= Some Experience</span>
                </SpecsKey>
            </Technical>
        </SectionContainer >
    );
}

export default AboutSection
