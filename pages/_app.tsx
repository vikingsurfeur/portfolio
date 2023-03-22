import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@/components/Layout";
import theme from "@/lib/theme";
import "@fontsource/bebas-neue";
import "@fontsource/jost";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
                <Analytics />
            </Layout>
        </ChakraProvider>
    );
}
