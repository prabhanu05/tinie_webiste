import Header from '@/components/common/Header';
import SecondaryLayout from '@/components/common/SecondaryLayout';
import styles from '@/styles/Contact.module.css';
import { Amiko } from 'next/font/google';
import Link from 'next/link';

const amiko = Amiko({ weight: '400', subsets: ['latin'] });

export default function Contact() {
    return (
        <>
            <Header />
            <SecondaryLayout text='Contact Us'>
                <div className={styles.row}>
                    <div className={styles.col}>
                        <h3 className={amiko.className}>Address</h3>
                        <p className={amiko.className}>
                            tinie business pvt. ltd.
                        </p>
                        <p className={amiko.className}>221/A, 22A cross</p>
                        <p className={amiko.className}>HSR layout, sector 3</p>
                        <p className={amiko.className}>Bengaluru,</p>
                        <p className={amiko.className}>Karnataka 560104</p>
                    </div>
                    <div className={styles.col}>
                        <h3 className={amiko.className}>Email</h3>
                        <Link
                            href='mailto:info@tinie.in'
                            className={amiko.className}
                        >
                            info@tinie.in
                        </Link>
                    </div>
                    <div className={styles.col}>
                        <h3 className={amiko.className}>Phone</h3>
                        <Link href='tel:6366069837' className={amiko.className}>
                            +91 6366069837
                        </Link>
                    </div>
                </div>
            </SecondaryLayout>
        </>
    );
}
