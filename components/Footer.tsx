import { FC, ReactNode } from "react";
import NextLink from "next/link";
import Divider from "./Divider";
import { motion } from "framer-motion";
import { chakra } from "@chakra-ui/system";
import { Box, Heading, Text, Link, List, ListItem } from "@chakra-ui/react";
import { IUser } from "@/lib/types/IUser";

const AnimatedListItem = chakra(motion(ListItem));

const FooterBoxItem: FC<{
    title: string;
    children: ReactNode;
}> = ({ title, children }) => {
    return (
        <Box w={[300, 400, 500]}>
            <Heading
                as="h4"
                size="lg"
                marginBottom="15px"
                textDecorationLine="underline"
                textDecorationThickness="1px"
                textUnderlineOffset="6px"
            >
                {title}
            </Heading>
            <List>{children}</List>
        </Box>
    );
};

const FooterBoxListItem: FC<{
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
            >
                {label}
            </Link>
        </AnimatedListItem>
    );
};

const Footer: FC<{ users: IUser[] }> = ({ users }) => {
    const handleCopyrightYear = () => {
        const currentYear = new Date().getFullYear();

        if (currentYear === 2023) {
            return "2023";
        }

        return `2023 - ${currentYear}`;
    };

    return (
        <Box as="footer" py={20} overflow="hidden">
            <Divider
                width="90vw"
                height="1px"
                color="black"
                displaySide="end"
            />
            <Text fontSize="xs" width="90vw" marginLeft="auto">
                © {handleCopyrightYear()} David Bouscarle
            </Text>
            <Box
                width="90vw"
                marginLeft="auto"
                marginTop="40px"
                display="flex"
                justifyContent="space-between"
            >
                <FooterBoxItem title="CONTACT">
                    <FooterBoxListItem
                        href="/contact"
                        label="Send me a message &#8594;"
                        target="_self"
                    />
                </FooterBoxItem>
                <FooterBoxItem title="ABOUT">
                    <FooterBoxListItem
                        href="/about"
                        label="A kind of little part of me &#8594;"
                        target="_self"
                    />
                </FooterBoxItem>
                <FooterBoxItem title="FOLLOW ME">
                    <FooterBoxListItem
                        href={users[0].behance}
                        label="Behance"
                        target="_blank"
                    />
                    <FooterBoxListItem
                        href={users[0].instagram}
                        label="Instagram"
                        target="_blank"
                    />
                    <FooterBoxListItem
                        href={users[0].facebook}
                        label="Facebook"
                        target="_blank"
                    />
                    <FooterBoxListItem
                        href={users[0].linkedin}
                        label="Linkedin"
                        target="_blank"
                    />
                    <FooterBoxListItem
                        href={users[0].github}
                        label="Github"
                        target="_blank"
                    />
                </FooterBoxItem>
            </Box>
        </Box>
    );
};

export default Footer;
