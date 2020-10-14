import styled, { css } from "styled-components"

export const CodeContainer = styled.div`

align-self: flex-start;
max-height: calc(100vh - 80px);
color: #10D60A;
word-wrap: break-word;
font-size: 25px;
overflow: hidden;
height: 0;
width: 0;
position: absolute;
left: 0;
padding: 0;
transition: all 6s linear 2s;
${props => props.transition && css`
height: 100%;
width: 100%;
`}

> code {
    max-height: calc(100vh - 80px);
    max-width: 100vw;
}
`

// export const CodeInner = styled.div`
// position: absolute;
// left: 0;
// transition: all 6s linear 2s;
// max-height: calc(100vh - 80px);
// ${props => props.transition && css`
// height: 100%;
// width: 100%;
// `}`

export const CodeOuter = styled.div`
position: relative;
max-width: 1800px;
flex: 1 1 auto;
height: calc(100vh - 80px);
width: 100%;
align-self: flex-start;
`