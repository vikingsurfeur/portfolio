import { FC, ReactNode, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";
import { Box } from "@chakra-ui/react";
import { usePreventVerticalScroll } from "@/lib/hooks/usePreventVerticalScroll";
import { IUser } from "@/lib/types/IUser";

const Layout: FC<{
    users: IUser[];
    children: ReactNode;
}> = ({ users, children }) => {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    usePreventVerticalScroll(isBurgerOpen);

    const toggleBurger = () => {
        setIsBurgerOpen(!isBurgerOpen);
    };

    return (
        <Box position="relative">
            <Menu toggleBurger={toggleBurger} isBurgerOpen={isBurgerOpen} />
            <Header toggleBurger={toggleBurger} isBurgerOpen={isBurgerOpen} />
            <Box marginTop="120px">{children}</Box>
            <Footer users={users} />
        </Box>
    );
};

export default Layout;
