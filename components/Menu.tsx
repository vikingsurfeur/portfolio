import { FC } from "react";
import NextLink from "next/link";
import { motion } from "framer-motion";
import { chakra } from "@chakra-ui/system";
import { Link, UnorderedList, ListItem } from "@chakra-ui/react";

const AnimatedBox = chakra(motion.div);
const AnimatedList = chakra(motion(UnorderedList));
const AnimatedListItem = chakra(motion(ListItem));

const menuVariants = {
    visible: {
        opacity: 1,
    },
    hidden: {
        opacity: 0,
        transition: {
            delay: 0.15,
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

const listItemVariants = {
    visible: {
        y: 0,
        opacity: 1,
    },
    hidden: {
        y: "100%",
        opacity: 0,
    },
};

const MenuLink: FC<{
    href: string;
    label: string;
    toggleBurger: () => void;
}> = ({ href, label, toggleBurger }) => {
    return (
        <AnimatedListItem
            variants={listItemVariants}
            listStyleType="none"
            marginBottom="30px"
            height="fit-content"
            whileHover={{
                scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
        >
            <Link
                as={NextLink}
                href={href}
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                color="black"
                _hover={{ textDecoration: "none" }}
                onClick={toggleBurger}
            >
                {label}
            </Link>
        </AnimatedListItem>
    );
};

const Menu: FC<{
    toggleBurger: () => void;
    isBurgerOpen: boolean;
}> = ({ toggleBurger, isBurgerOpen }) => {
    return (
        <AnimatedBox
            variants={menuVariants}
            initial={false}
            animate={isBurgerOpen ? "visible" : "hidden"}
            h="100vh"
            w="100vw"
            display="flex"
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
                marginTop={0}
                display="flex"
                flexDirection="column"
                alignItems="center"
            >
                <MenuLink 
                    href="/" 
                    label="HOME" 
                    toggleBurger={toggleBurger} 
                />
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
