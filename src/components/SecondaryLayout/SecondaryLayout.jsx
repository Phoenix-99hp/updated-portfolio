import React from "react";
import { MainContent, PageContainer } from "./SecondaryLayoutStyle";
import Theme from "../../theme/theme";
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../../theme/globalStyle"
import Nav from "../Nav/Nav";

const SecondaryLayout = ({ children }) => {
    return (
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <PageContainer>
                <MainContent>
                    {children}
                </MainContent>
                <Nav />
            </PageContainer>
        </ThemeProvider>
    )
}

export default SecondaryLayout