import { FC, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";
import { chakra } from '@chakra-ui/system';

const AnimatedBox = chakra(motion.div);

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
            />
            <Box 
                position="relative" 
                w="40px" 
                h="16px"
                cursor="pointer"
                onClick={toggleBurger}
            >
                <AnimatedBox
                    initial={false}
                    animate={isBurgerOpen ? { rotate: 45, y: "7px" } : { rotate: 0 }}
                    transition={{ duration: "0.5" }}
                    position="absolute"
                    top={0}
                    left={0}
                    w="100%"
                    h="2px"
                    backgroundColor="black"
                ></AnimatedBox>
                <AnimatedBox
                    initial={false}
                    animate={isBurgerOpen ? { rotate: -45, y: "-7px" } : { rotate: 0 }}
                    transition={{ duration: "0.5" }}
                    position="absolute"
                    bottom={0}
                    left={0}
                    w="100%"
                    h="2px"
                    backgroundColor="black"
                ></AnimatedBox>
            </Box>
        </Box>
    );
};

export default Header;
