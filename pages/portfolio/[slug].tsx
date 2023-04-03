import { FC } from "react";
import { ParsedUrlQuery } from "querystring";
import { GetStaticPaths, GetStaticProps } from "next";
import { Box } from "@chakra-ui/react";
import { fetcher } from "@/lib/fetcher";
import { IPortfolioData } from "@/lib/types/IPortfolio";

const PortfolioItem: FC<{ portfolio: IPortfolioData }> = ({ portfolio }) => {
    return <Box>Portfolio item</Box>;
};

export const getStaticPaths: GetStaticPaths = async () => {
    const portfolios = await fetcher("portfolios");

    const paths = portfolios.data.map((p: IPortfolioData) => {
        return {
            params: { slug: p.attributes.slug },
        };
    });

    return { paths, fallback: false };
};

interface IParams extends ParsedUrlQuery {
    slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { slug } = context.params as IParams;
    const portfolio = await fetcher("portfolios", `slug=${slug}`);
    
    if (!portfolio) {
        return {
            redirect: {
                destination: "/500",
                permanent: false,
            },
        };
    }

    return {
        props: {
            portfolio: portfolio.data,
        },
    };
};


export default PortfolioItem;
