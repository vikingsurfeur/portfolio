import { FC } from "react";
import { motion } from "framer-motion";
import { chakra } from "@chakra-ui/system";

const AnimatedBox = chakra(motion.div);

const Burger: FC<{
    toggleBurger: () => void;
    isBurgerOpen: boolean;
}> = ({ toggleBurger, isBurgerOpen }) => {
    const handleBurgerVariants = (position: string) => {
        return {
            open: {
                rotate: position === "top" ? 45 : -45,
                y: position === "top" ? "7px" : "-7px",
            },
            closed: {
                rotate: 0,
                y: 0,
            },
        };
    };

    return (
        <AnimatedBox
            position="relative"
            w={{ base: "30px", md: "40px" }}
            h={{ base: "12px", md: "16px" }}
            cursor="pointer"
            onClick={toggleBurger}
        >
            <AnimatedBox
                variants={handleBurgerVariants("top")}
                initial={false}
                animate={isBurgerOpen ? "open" : "closed"}
                position="absolute"
                top={0}
                left={0}
                w="100%"
                h="2px"
                backgroundColor="black"
            ></AnimatedBox>
            <AnimatedBox
                variants={handleBurgerVariants("bottom")}
                initial={false}
                animate={isBurgerOpen ? "open" : "closed"}
                position="absolute"
                bottom={0}
                left={0}
                w="100%"
                h="2px"
                backgroundColor="black"
            ></AnimatedBox>
        </AnimatedBox>
    );
};

export default Burger;
