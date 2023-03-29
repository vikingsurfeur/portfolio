import { FC, ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Box } from "@chakra-ui/react";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
            <Header />
            <Box marginTop="120px">{children}</Box>
            <Footer />
        </>
    );
};

export default Layout;
