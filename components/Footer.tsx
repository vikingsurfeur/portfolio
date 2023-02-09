import { FC } from "react";
import styles from "@/styles/Footer.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <p>© David Bouscarle - 2023</p>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <Link
                        href="https://www.behance.net/davidbouscarle"
                        target="_blank"
                    >
                        <Image src="/behance.png" alt="logo behance David Bouscarle photography" width={32} height={32} />
                    </Link>
                </li>
                <li className={styles.listItem}>
                    <Link
                        href="https://www.linkedin.com/in/davidbouscarle/"
                        target="_blank"
                    >
                        <Image src="/linkedin.png" alt="logo linkedin David Bouscarle photography" width={32} height={32} />
                    </Link>
                </li>
                <li className={styles.listItem}>
                    <Link
                        href="https://github.com/DavidBouscarle"
                        target="_blank"
                    >
                        <Image src="/github.png" alt="logo github David Bouscarle photography" width={32} height={32} />
                    </Link>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
