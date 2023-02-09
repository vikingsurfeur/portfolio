import React, { FC, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Jost } from "@next/font/google";
import styles from "@/styles/Layout.module.css";

const jost = Jost({ subsets: ["latin"] });

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className={jost.className}>
            <div className={styles.layout}>
                <Header />
                {children}
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
