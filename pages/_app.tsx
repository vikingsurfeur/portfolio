import type { AppProps } from "next/app";
import { Analytics } from '@vercel/analytics/react';
import Layout from "@/components/Layout";
import "@/styles/normalize.css";
import "@/styles/reset.css";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
            <Analytics />
        </Layout>
    );
}
