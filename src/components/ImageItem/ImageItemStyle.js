import styled, { css } from "styled-components";
import LazyLoad from 'react-lazy-load';

export const StyledLazyLoad = styled(LazyLoad)`
height: 200px;
width: 200px;
filter: blur(5px);
-webkit-filter: blur(5px);
margin-right: 15px;

> img {
    border-radius: 5px;
}

${props => props.isVisible && css`
    filter: none;
    -webkit-filter: none;`}`