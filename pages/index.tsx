// React / Next
import { FC, useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import Image from "next/image";

// Components
import HeadPage from "@/components/HeadPage";
import AnimatedLink from "@/components/AnimatedLink";

// UI
import { AspectRatio, Box, List, Slide } from "@chakra-ui/react";
import "lightbox.js-react/dist/index.css";
import { SlideshowLightbox, initLightboxJS } from "lightbox.js-react";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Lib
import { fetcher } from "@/lib/fetcher";
import { envResolver } from "@/lib/envResolver";
import { IPortfolio } from "@/lib/types/IPortfolio";
import { 
    getPhotographFormatRatio, 
    getPropertyFromObject, 
    getRandomString, 
    transformPhotographsDataForLightbox 
} from "@/lib/utils";
import { IPhotograph } from "@/lib/types/IPhotograph";

const Home: FC<{
    portfolios: IPortfolio;
    lastWorkPortfolio: IPhotograph;
}> = ({ portfolios, lastWorkPortfolio }) => {
    useEffect(() => {
        initLightboxJS(`${envResolver.licenseLightbox}`, "individual");
    });

    const lastWorkPortfolioPhotograph = transformPhotographsDataForLightbox(lastWorkPortfolio.data)
    
    const [slidesPerView, setSlidesPerView] = useState<number>(2.5);
    const [width, setWidth] = useState<number | undefined>(undefined);

    useEffect(() => {
        const handleSlidesPerView = () => {
            if (typeof window !== "undefined") {
                setWidth(window.innerWidth);
            }

            width && width <= 1280 ? setSlidesPerView(1) : setSlidesPerView(2.5);
        }

        window.addEventListener("DOMContentLoaded", handleSlidesPerView);
        window.addEventListener("resize", handleSlidesPerView);
        return () => {
            window.removeEventListener("DOMContentLoaded", handleSlidesPerView);
            window.removeEventListener("resize", handleSlidesPerView);
        }
    }, [width])

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
                <Box w={{ base: "100vw", xl: "55vw" }} marginLeft={{ base: "inherit", xl: "auto" }}>
                    <SlideshowLightbox 
                        lightboxIdentifier="lightboxIndex" 
                        framework="next" 
                        images={lastWorkPortfolioPhotograph}
                        fullScreen={true}
                        backgroundColor="rgba(0, 0, 0, 0.95)"
                    >
                        <Swiper
                            slidesPerView={slidesPerView}
                            spaceBetween={50}
                        >
                            {lastWorkPortfolioPhotograph.map((p) => (
                                <AspectRatio
                                    key={getRandomString()}
                                    maxW="400px"
                                    ratio={p.ratio}
                                >
                                    <SwiperSlide key={getRandomString()}>
                                        <Image
                                            src={p.src}
                                            height={400}
                                            width={400}
                                            alt={p.alt}
                                            style={{ margin: "0 auto" }}
                                            priority
                                            data-lightboxjs="lightboxIndex"
                                        />
                                    </SwiperSlide>
                                </AspectRatio>
                            ))}
                        </Swiper>
                    </SlideshowLightbox>
                </Box>
                {portfolios.data.map((p) => (
                    <List key={p.id}>
                        <AnimatedLink
                            href={`/portfolio/${getPropertyFromObject(p, "slug")}`}
                            target="_self"
                            label={getPropertyFromObject(p, "title")}
                        />
                        <AspectRatio
                            maxW="400px"
                            ratio={getPhotographFormatRatio(getPropertyFromObject(p, "ratio"))}
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
        "populate=*&filters[isLastWorkPortfolio][$eq]=true&pagination[limit]=5&sort[0]=createdAt:desc"
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
