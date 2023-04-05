// React / Next
import { FC } from "react";

// UI
import { Box } from "@chakra-ui/react";

const Divider: FC<{
    width: string;
    height: string;
    color: string;
    displaySide: "start" | "center" | "end";
}> = ({ width, height, color, displaySide }) => {
    return (
        <Box display="flex" justifyContent={displaySide}>
            <Box width={width} height={height} backgroundColor={color} />
        </Box>
    );
};

export default Divider;
