import { FC } from "react";
import { GetServerSideProps } from "next";
import HeadPage from "@/components/HeadPage";
import { Box, List } from "@chakra-ui/react";
import { fetcher } from "@/lib/fetcher";
import AnimatedLink from "@/components/AnimatedLink";

const Home: FC<{ portfolios: any }> = ({ portfolios }) => {
    return (
        <>
            <HeadPage
                title="David Bouscarle Photography | Home"
                description="David Bouscarle, a landscape and nature photographer 
                from the Luberon region and based at the foot of Mont Ventoux, 
                invites you to discover his vision of natural beauty through his captivating photographs. 
                Passionate about forests and mountains, David travels to the most beautiful 
                places in the region and around the world to capture timeless and striking images. 
                Explore his portfolio and let yourself be transported into a world of serenity and wonder. 
                Contact David for collaborative projects, art print sales. 
                Boost your inspiration with with David Bouscarle's photographs."
            />
            <Box as="main">
                {portfolios.data.map((p: any) => (
                    <List key={p.attributes.id}>
                        <AnimatedLink
                            href={`/portfolio/${p.attributes.slug}`}
                            target="_self"
                            label={p.attributes.title}
                        />
                    </List>
                ))}
            </Box>
        </>
    );
};

export const getServerSideProps: GetServerSideProps<{
    portfolios: any;
}> = async () => {
    const portfolios = await fetcher("portfolios");

    if (!portfolios) {
        return {
            redirect: {
                destination: "/500",
                permanent: false,
            },
        };
    }

    return {
        props: {
            portfolios,
        },
    };
};

export default Home;
