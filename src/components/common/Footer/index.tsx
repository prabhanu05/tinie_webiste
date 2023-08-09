import styles from '@/styles/Footer.module.css';
import { PATHS } from '@/utils/Paths';
import { Lato } from 'next/font/google';
import Link from 'next/link';

const lato = Lato({ weight: '400', subsets: ['latin'] });

const Footer = () => {
    return (
        <footer className={styles.container}>
            <Link href={PATHS.ContactUs} className={lato.className}>
                About Us
            </Link>
            <Link href={PATHS.ContactUs} className={lato.className}>
                Contact Us
            </Link>
            <p className={lato.className}>
                Copyright Tinie Business Pvt Ltd {new Date().getFullYear()}
            </p>
            <Link href={PATHS.TnC} className={lato.className}>
                Terms &amp; Conditions
            </Link>
            <Link href={PATHS.PrivacyPolicy} className={lato.className}>
                Privacy Policy
            </Link>
        </footer>
    );
};

export default Footer;
