import { Box } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

const LayoutError: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <Box
            minW="100vw"
            minH="100vh"
            display="flex"
            alignItems="center"
        >
            {children}
        </Box>
    )
};

export default LayoutError;