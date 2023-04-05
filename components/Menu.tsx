// React / Next
import { FC } from "react";

// Component
import MenuLink from "./MenuLink";

// UI
import { motion } from "framer-motion";
import { chakra } from "@chakra-ui/system";
import { UnorderedList } from "@chakra-ui/react";

const AnimatedBox = chakra(motion.div);
const AnimatedList = chakra(motion(UnorderedList));

const menuVariants = {
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "tween",
        }
    },
    hidden: {
        y: "100%",
        opacity: 0,
        transition: {
            type: "tween",
            delay: 0.4,
        },
    },
};

const listVariants = {
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
    hidden: {
        transition: {
            staggerChildren: 0.1,
            staggerDirection: -1,
        },
    },
};

const Menu: FC<{
    toggleBurger: () => void;
    isBurgerOpen: boolean;
}> = ({ toggleBurger, isBurgerOpen }) => {
    return (
        <AnimatedBox
            variants={menuVariants}
            initial="hidden"
            animate={isBurgerOpen ? "visible" : "hidden"}
            h="100vh"
            w="100vw"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            position="fixed"
            zIndex={20}
            backgroundColor="rgba(255, 255, 255, 0.8)"
            top={0}
            bottom={0}
            right={0}
            left={0}
            opacity={0}
            backdropFilter="blur(5px)"
        >
            <AnimatedList
                variants={listVariants}
                initial="hidden"
                animate={isBurgerOpen ? "visible" : "hidden"}
                margin={0}
                display="flex"
                flexDirection="column"
                alignItems="center"
            >
                <MenuLink href="/" label="HOME" toggleBurger={toggleBurger} />
                <MenuLink
                    href="/portfolio"
                    label="PORTFOLIO"
                    toggleBurger={toggleBurger}
                />
                <MenuLink
                    href="/about"
                    label="ABOUT"
                    toggleBurger={toggleBurger}
                />
                <MenuLink
                    href="/contact"
                    label="CONTACT"
                    toggleBurger={toggleBurger}
                />
            </AnimatedList>
        </AnimatedBox>
    );
};

export default Menu;
