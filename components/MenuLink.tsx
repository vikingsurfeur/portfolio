// React / Next
import { FC } from "react";
import NextLink from "next/link";

// UI
import { motion } from "framer-motion";
import { chakra } from "@chakra-ui/system";
import { Link, ListItem } from "@chakra-ui/react";

const AnimatedListItem = chakra(motion(ListItem));

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

export default MenuLink;