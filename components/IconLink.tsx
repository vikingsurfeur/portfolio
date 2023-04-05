// React / Next
import { FC } from "react";
import NextLink from "next/link";
import Image from "next/image";

// UI
import { Link } from "@chakra-ui/react";

const IconLink: FC<{
    href: string;
    src: string;
    alt: string;
    target: string;
    width: number;
    height: number;
}> = ({ href, src, alt, target, width, height }) => {
    return (
        <Link as={NextLink} href={href} target={target}>
            <Image src={src} alt={alt} width={width} height={height} priority />
        </Link>
    );
};

export default IconLink;
