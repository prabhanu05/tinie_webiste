'use client';

import Button from '@/components/common/Button';
import Header from '@/components/common/Header';
import styles from '@/styles/Home.module.css';
import { PATHS } from '@/utils/Paths';
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();

    const navigateHandler = (path: string) => {
        router.push(path);
    };

    return (
        <>
            <Header />
            <main className={styles.content}>
                <Button
                    text='Terms and Conditions'
                    variant='primary'
                    onClick={navigateHandler.bind(null, PATHS.TnC)}
                />
                <Button
                    text='Privacy Policy'
                    variant='primary'
                    onClick={navigateHandler.bind(null, PATHS.PrivacyPolicy)}
                />
            </main>
        </>
    );
}
