// React / Next
import { FC } from "react";
import { GetServerSideProps } from "next";
import Image from "next/image";

// Components
import HeadPage from "@/components/HeadPage";
import AnimatedLink from "@/components/AnimatedLink";

// UI
import { AspectRatio, Box, List } from "@chakra-ui/react";

// Lib
import { fetcher } from "@/lib/fetcher";
import { IPortfolio } from "@/lib/types/IPortfolio";
import { getPhotographFormatRatio } from "@/lib/utils";

const Home: FC<{ portfolios: IPortfolio }> = ({ portfolios }) => {
    console.log(portfolios);

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
                {portfolios.data.map((p) => (
                    <List key={p.id}>
                        <AnimatedLink
                            href={`/portfolio/${p.attributes.slug}`}
                            target="_self"
                            label={p.attributes.title}
                        />
                        <AspectRatio maxW='400px' ratio={getPhotographFormatRatio(p.attributes?.photographCover?.data.attributes.format as string)}>
                            <Image
                                src={p.attributes?.photographCover?.data.attributes.file?.data.attributes.url as string}
                                height={1000}
                                width={1000}
                                alt="Blabla"
                            />
                        </AspectRatio>
                    </List>
                ))}
            </Box>
        </>
    );
};

export const getServerSideProps: GetServerSideProps<{
    portfolios: IPortfolio;
}> = async () => {
    const portfolios = await fetcher("portfolios", "populate[photographCover][populate][0]=file");

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
