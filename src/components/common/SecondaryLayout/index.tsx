import styles from '@/styles/SecondaryLayout.module.css';
import { Paytone_One } from 'next/font/google';
import { ReactNode } from 'react';

const paytone = Paytone_One({ weight: '400', subsets: ['latin'] });

const SecondaryLayout = (props: { text: string; children: ReactNode }) => {
    return (
        <main className={styles.content}>
            <h1 className={paytone.className}>{props.text}</h1>
            <div className={styles.container}>{props.children}</div>
        </main>
    );
};

export default SecondaryLayout;
