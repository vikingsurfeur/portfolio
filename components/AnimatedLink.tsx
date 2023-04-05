// React / Next
import { FC } from "react";
import NextLink from "next/link";

// UI
import { motion } from "framer-motion";
import { chakra } from "@chakra-ui/system";
import { Link, ListItem } from "@chakra-ui/react";

const AnimatedListItem = chakra(motion(ListItem));

const AnimatedLink: FC<{
    href: string;
    label: string;
    target: string;
}> = ({ href, label, target }) => {
    return (
        <AnimatedListItem
            transformOrigin="left"
            whileHover={{
                scale: 1.05,
            }}
            whileTap={{
                scale: 0.95,
            }}
        >
            <Link
                as={NextLink}
                href={href}
                target={target}
                _hover={{ textDecoration: "none" }}
                fontSize={{ base: "14px", md: "16px" }}
            >
                {label}
            </Link>
        </AnimatedListItem>
    );
};

export default AnimatedLink;