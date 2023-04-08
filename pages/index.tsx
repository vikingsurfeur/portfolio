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
import { getPhotographFormatRatio, getPropertyFromObject } from "@/lib/utils";
import { IPhotograph } from "@/lib/types/IPhotograph";

const Home: FC<{
    portfolios: IPortfolio;
    lastWorkPortfolio: IPhotograph[];
}> = ({ portfolios, lastWorkPortfolio }) => {
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
                            href={`/portfolio/${getPropertyFromObject(p, "slug")}`}
                            target="_self"
                            label={getPropertyFromObject(p, "title")}
                        />
                        <AspectRatio
                            maxW="400px"
                            ratio={getPhotographFormatRatio(
                                getPropertyFromObject(p, "ratio")
                            )}
                        >
                            <Image
                                src={getPropertyFromObject(p, "url", "medium")}
                                height={getPropertyFromObject(p, "height", "medium")}
                                width={getPropertyFromObject(p, "width", "medium")}
                                alt={getPropertyFromObject(p, "alternativeText")}
                                priority
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
    const portfolios = await fetcher(
        "portfolios",
        "populate[photographCover][populate][0]=file&pagination[limit]=3&sort[0]=createdAt:desc"
    );
    const lastWorkPortfolio = await fetcher(
        "photographs",
        "populate=*&filters[isLastWorkPortfolio][$eq]=true"
    );

    if (!portfolios || !lastWorkPortfolio) {
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
            lastWorkPortfolio,
        },
    };
};

export default Home;
