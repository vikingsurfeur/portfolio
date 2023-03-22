import HeadPage from "@/components/HeadPage";
import Head from "next/head";

export default function NotFound() {
    return (
        <>
            <HeadPage
                title="David Bouscarle | Photography | 404"
                description="Oops! Looks like you've wandered into the unknown, like a lost sheep in the Alps. 
                But don't worry, we're not about to abandon you! Let's find your way back to the herd, shall we? 
                Just hit that back button, or click on one of our links to get back on track. 
                We promise, we won't shear you off too much for getting lost."
            />
        </>
    );
}
