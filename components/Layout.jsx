import React from "react";
import Navbar from "./Navbar";
import CategoryList from "./categories/CategoryList";
import Main from "./main/Main";


const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <CategoryList/>
            <Main />
            {children}
        </>
    );
};
export default Layout;