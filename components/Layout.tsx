import React, { FC, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div>
            <div>
                <Header />
                {children}
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
