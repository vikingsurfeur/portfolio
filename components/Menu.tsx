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

const Menu: FC<{ isBurgerOpen: boolean }> = ({ isBurgerOpen }) => {
    return (
        <AnimatedBox
            variants={menuVariants}
            initial={false}
            animate={isBurgerOpen ? "visible" : "hidden"}
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="fixed"
            zIndex={10}
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
                display="flex"
                flexDirection="column"
                alignItems="center"
            >
                <AnimatedListItem
                    variants={listItemVariants}
                    listStyleType="none"
                    marginBottom="30px"
                >
                    <Link
                        as={NextLink}
                        href="/home"
                        fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                        color="black"
                    >
                        HOME
                    </Link>
                </AnimatedListItem>
                <AnimatedListItem
                    variants={listItemVariants}
                    listStyleType="none"
                    marginBottom="30px"
                >
                    <Link
                        as={NextLink}
                        href="/porfolio"
                        fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                        color="black"
                    >
                        PORTFOLIO
                    </Link>
                </AnimatedListItem>
                <AnimatedListItem
                    variants={listItemVariants}
                    listStyleType="none"
                    marginBottom="30px"
                >
                    <Link
                        as={NextLink}
                        href="/about"
                        fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                        color="black"
                    >
                        ABOUT
                    </Link>
                </AnimatedListItem>
                <AnimatedListItem
                    variants={listItemVariants}
                    listStyleType="none"
                    marginBottom="30px"
                >
                    <Link
                        as={NextLink}
                        href="/contact"
                        fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                        color="black"
                    >
                        CONTACT
                    </Link>
                </AnimatedListItem>
            </AnimatedList>
        </AnimatedBox>
    );
};

export default Menu;
