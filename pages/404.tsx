import AnimatedLink from "@/components/AnimatedLink";
import HeadPage from "@/components/HeadPage";
import { Container, List, Text } from "@chakra-ui/react";

export default function NotFound() {
    return (
        <>
            <HeadPage
                title="David Bouscarle Photography | 404"
                description="Oops! Looks like you've wandered into the unknown, like a lost sheep in the Alps. 
                But don't worry, we're not about to abandon you! Let's find your way back to the herd, shall we? 
                Just hit that back button, or click on one of our links to get back on track. 
                We promise, we won't shear you off too much for getting lost."
            />
            <Container 
                minH="60vh"
                display="flex"
                flexDirection="column"
                justifyContent="center"    
            >
                <Text>
                    Oops! Looks like you&apos;ve wandered into the unknown, like a
                    lost sheep in the Alps. But don&apos;t worry, we&apos;re not about to
                    abandon you! Let&apos;s find your way back to the herd, shall we?
                    Just hit that back button, or click on one of our links to
                    get back on track. We promise, we won&apos;t shear you off too
                    much for getting lost.
                </Text>
                <List marginTop={20}>
                    <AnimatedLink 
                        href="/"
                        target="_self"
                        label="Back in a secure place little sheep &#8594;"
                    />
                </List>
            </Container>
        </>
    );
}
