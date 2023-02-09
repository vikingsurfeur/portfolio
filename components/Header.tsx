import { FC } from "react";
import Image from "next/image";
import styles from "@/styles/Header.module.css";

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <Image
                src="/logo_david_bouscarle.png"
                alt="Logo David Bouscarle photography"
                width={50}
                height={50}
            />
            <p>Coming soon...</p>
        </header>
    );
};

export default Header;
