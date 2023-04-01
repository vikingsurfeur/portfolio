import { FC, ReactNode, useEffect, useState } from "react";
import Footer from "./footer";
import Header from "./header";
import Menu from "./menu";
import { Box, Spinner } from "@chakra-ui/react";
import { usePreventVerticalScroll } from "@/lib/hooks/usePreventVerticalScroll";
import { fetcher } from "@/lib/fetcher";
import { IUser } from "@/lib/types/IUser";

const Layout: FC<{
    children: ReactNode;
}> = ({ children }) => {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState<IUser[]>([]);

    usePreventVerticalScroll(isBurgerOpen);

    const toggleBurger = () => {
        setIsBurgerOpen(!isBurgerOpen);
    };

    const fetchLayoutData = async () => {
        const users = await fetcher("users", "lastName=Bouscarle");
        setUsers(users);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchLayoutData();
    }, []);

    return (
        <>
            {!isLoading ? (
                <Box position="relative">
                    <Menu
                        toggleBurger={toggleBurger}
                        isBurgerOpen={isBurgerOpen}
                    />
                    <Header
                        toggleBurger={toggleBurger}
                        isBurgerOpen={isBurgerOpen}
                    />
                    <Box marginTop="120px">{children}</Box>
                    <Footer users={users} />
                </Box>
            ) : (
                <Box
                    minW="100vw"
                    minH="100vh"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Spinner
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color="black"
                        size="xl"
                    />
                </Box>
            )}
        </>
    );
};

export default Layout;
