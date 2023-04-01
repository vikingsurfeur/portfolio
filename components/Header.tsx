import { FC } from "react";
import { Box } from "@chakra-ui/react";
import Burger from "./Burger";
import IconLink from "./IconLink";

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
            zIndex={20}
            top={0}
            left={0}
            right={0}
            backgroundColor="rgba(255, 255, 255, 0.8)"
            backdropFilter="blur(5px)"
        >
            <IconLink
                href="/"
                src="/david_bouscarle_logo.png"
                alt="Logo David Bouscarle photography"
                target="_self"
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
