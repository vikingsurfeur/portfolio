import { useEffect } from "react";

export const usePreventVerticalScroll = (bool: boolean) => {
    useEffect(() => {
        bool
            ? document.body.style.overflow = "hidden"
            : document.body.style.overflow = "unset";
    }, [bool]);
};