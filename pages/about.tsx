import { GetServerSideProps } from "next";
import { Box } from "@chakra-ui/react";
import { fetcher } from "@/lib/fetcher";
import { IUser } from "@/lib/types/IUser";

const About = () => {
    return (
        <Box></Box>
    )
};

export const getServerSideProps: GetServerSideProps<{
    users: IUser[];
}> = async () => {
    const users = await fetcher("users", "lastName=Bouscarle");

    return {
        props: {
            users,
        },
    };
};

export default About;
