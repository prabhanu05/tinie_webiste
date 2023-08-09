'use client';

import HeaderButton from '@/components/common/HeaderButton';
import styles from '@/styles/Header.module.css';
import Arc from '@/svg/Arc';
import { IPaths, PATHS } from '@/utils/Paths';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Logo from '/public/logo.png';

const Header = () => {
    const [active, setActive] = useState(false);

    const router = useRouter();

    const navigateHandler = (path: IPaths) => {
        router.push(PATHS[path]);
    };

    const toggleHandler = () => {
        setActive((oldState) => !oldState);
    };

    return (
        <>
            <header className={styles.header}>
                <HeaderButton
                    text='HOME'
                    onClick={navigateHandler.bind(this, 'HOME')}
                />
                <HeaderButton
                    text='CONTACT US'
                    onClick={navigateHandler.bind(this, 'ContactUs')}
                />
                <HeaderButton
                    text='DOWNLOAD THE APP'
                    onClick={navigateHandler.bind(this, 'Download')}
                />
                <Image src={Logo} alt='Logo' />
                <HeaderButton
                    text='PRIVACY POLICY'
                    onClick={navigateHandler.bind(this, 'PrivacyPolicy')}
                />
                <HeaderButton
                    text='TERMS & CONDITIONS'
                    onClick={navigateHandler.bind(this, 'TnC')}
                />

                <button className={styles.toggleBtn} onClick={toggleHandler}>
                    <div
                        className={`${styles.hamburger} ${
                            active ? styles.is_active : ''
                        }`}
                    >
                        <span className={styles.line}></span>
                        <span className={styles.line}></span>
                        <span className={styles.line}></span>
                    </div>
                </button>
            </header>

            <div className={`${styles.list} ${active ? styles.active : ''}`}>
                <HeaderButton
                    text='HOME'
                    onClick={navigateHandler.bind(this, 'HOME')}
                />
                <HeaderButton
                    text='CONTACT US'
                    onClick={navigateHandler.bind(this, 'ContactUs')}
                />
                <HeaderButton
                    text='DOWNLOAD THE APP'
                    onClick={navigateHandler.bind(this, 'Download')}
                />
                <HeaderButton
                    text='PRIVACY POLICY'
                    onClick={navigateHandler.bind(this, 'PrivacyPolicy')}
                />
                <HeaderButton
                    text='TERMS & CONDITIONS'
                    onClick={navigateHandler.bind(this, 'TnC')}
                />
            </div>

            <div className={styles.arc}>
                <Arc />
            </div>
        </>
    );
};

export default Header;
