import { FC } from "react";
import Image from "next/image";
import { Box } from "@chakra-ui/react";
import Burger from "./Burger";

const Header: FC<{
    toggleBurger: () => void;
    isBurgerOpen: boolean;
}> = ({ toggleBurger, isBurgerOpen }) => {
    return (
        <Box
            as="header"
            height="120px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            p={10}
            position="fixed"
            zIndex={30}
            top={0}
            left={0}
            right={0}
            backgroundColor="rgba(255, 255, 255, 0.8)"
            backdropFilter="blur(5px)"
        >
            <Image
                src="/david_bouscarle_logo.png"
                alt="Logo David Bouscarle photography"
                width={45}
                height={45}
            />
            <Burger 
                toggleBurger={toggleBurger}
                isBurgerOpen={isBurgerOpen}
            />
        </Box>
    );
};

export default Header;
