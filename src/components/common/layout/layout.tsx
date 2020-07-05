import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

import theme from "../../../styles/theme";
import GlobalStyles from "../../../styles/global-styles";
import "../../../static/fonts/fonts.css";

const Layout = ({ children }) => (
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyles />
            {children}
        </>
    </ThemeProvider>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
