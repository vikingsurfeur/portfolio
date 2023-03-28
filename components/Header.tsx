import { FC, useState } from "react";
import Image from "next/image";
import { Box } from "@chakra-ui/react";
import Menu from "./Menu";
import Burger from "./Burger";

const Header: FC = () => {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    const toggleBurger = () => {
        setIsBurgerOpen(!isBurgerOpen);
    };

    return (
        <Box
            as="header"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={10}
        >
            <Image
                src="/david_bouscarle_logo.png"
                alt="Logo David Bouscarle photography"
                width={50}
                height={50}
                style={{ position: "relative", zIndex: 1 }}
            />
            <Burger 
                toggleBurger={toggleBurger}
                isBurgerOpen={isBurgerOpen}
            />
            <Menu 
                toggleBurger={toggleBurger}
                isBurgerOpen={isBurgerOpen} 
            />
        </Box>
    );
};

export default Header;
