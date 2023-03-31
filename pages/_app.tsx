import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Analytics } from "@vercel/analytics/react";
import { ChakraProvider } from "@chakra-ui/react";
import { chakra } from "@chakra-ui/system";
import Layout from "@/components/Layout";
import theme from "@/lib/theme";
import { AnimatePresence, motion } from "framer-motion";
import "@fontsource/bebas-neue";
import "@fontsource/jost";

const AnimatedBox = chakra(motion.div);

const pageTransition = {
    initial: {
        opacity: 0,
        x: 100,
        transition: {
            duration: 0.5,
            type: "tween",
            ease: "easeIn",
        },
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5 },
    },
    exit: {
        opacity: 0,
        x: -100,
        transition: {
            duration: 0.5,
            type: "tween",
            ease: "easeOut",
        },
    },
};

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const { users } = pageProps;

    return (
        <ChakraProvider theme={theme}>
            <Layout>
                <AnimatePresence mode="wait">
                    <AnimatedBox
                        key={router.route}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={pageTransition}
                    >
                        <Component {...pageProps} />
                    </AnimatedBox>
                </AnimatePresence>
                <Analytics />
            </Layout>
        </ChakraProvider>
    );
}
