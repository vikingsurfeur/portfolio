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
            height="120px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={10}
            position="fixed"
            top={0}
            left={0}
            right={0}
            backgroundColor="rgba(255, 255, 255, 0.8)"
            backdropFilter="blur(5px)"
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
