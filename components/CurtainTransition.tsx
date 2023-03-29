import { FC } from "react";
import { useRouter } from "next/router";
import { chakra } from "@chakra-ui/system";
import { AnimatePresence, motion } from "framer-motion";

const AnimatedBox = chakra(motion.div);

const curtainVariant = {
    enter: {
        transition: {
            staggerChildren: 0.08,
        },
    },
    end: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
};

const colorVariant = {
    start: { scaleY: 1 },
    enter: {
        scaleY: 0,
        transition: {
            duration: 0.8,
            ease: "easeInOut",
        },
    },
    end: {
        scaleY: 1,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
};

const Curtain: FC = () => {
    const location = useRouter();

    return (
        <AnimatePresence exitBeforeEnter>
            <AnimatedBox
                key={location.pathname}
                initial="start"
                animate="enter"
                exit="end"
                variants={curtainVariant}
                className="curtain"
            >
                <AnimatedBox
                    variants={colorVariant}
                    position="fixed"
                    top="0"
                    left="0"
                    zIndex="9999"
                    h="100vh"
                    w="100vw"
                    transformOrigin="top"
                    willChange="transform"
                    backgroundColor="black"
                />
                <AnimatedBox
                    variants={colorVariant}
                    position="fixed"
                    top="0"
                    left="0"
                    zIndex="9998"
                    h="100vh"
                    w="100vw"
                    transformOrigin="top"
                    willChange="transform"
                    backgroundColor="white"
                />
                <AnimatedBox
                    variants={colorVariant}
                    position="fixed"
                    top="0"
                    left="0"
                    zIndex="9997"
                    h="100vh"
                    w="100vw"
                    transformOrigin="top"
                    willChange="transform"
                    backgroundColor="black"
                />
            </AnimatedBox>
        </AnimatePresence>
    );
};

export default Curtain;
