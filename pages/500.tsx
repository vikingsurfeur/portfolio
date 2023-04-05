// Components
import AnimatedLink from "@/components/AnimatedLink";
import HeadPage from "@/components/HeadPage";

// UI
import { Container, List, Text } from "@chakra-ui/react";

export default function ErrorServer() {
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
                    Oops! It seems like our server has gone haywire, like a
                    shepherdless flock scattered in the hills. But fear not, we
                    won&apos;t leave you stranded! We&apos;re on the case to get things
                    back in order, so please bear with us. In the meantime, why
                    not take a moment to enjoy the scenery and catch your
                    breath? We&apos;ll let you know as soon as we&apos;ve corralled our
                    servers back into shape. Thank you for your patience and
                    understanding.
                </Text>
                <List marginTop={20}>
                    <AnimatedLink
                        href="/"
                        target="_self"
                        label="Go to a functional sheepfold &#8594;"
                    />
                </List>
            </Container>
        </>
    );
}
