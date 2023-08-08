'use client';

import Header from '@/components/common/Header';
import styles from '@/styles/Home.module.css';
import { Amiko, Hind, Paytone_One } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import Coupons from '/public/Coupons.png';
import GirlWithCart from '/public/GirlWithCart.png';
import MobileApp1 from '/public/MobileApp.png';
import MobileApp2 from '/public/MobileApp2.png';
import YoungMan from '/public/YoungManSitting.png';
import Apple from '/public/apple.png';
import Google from '/public/google.png';

const hind = Hind({ weight: '400', subsets: ['latin'] });
const paytone = Paytone_One({ weight: '400', subsets: ['latin'] });
const amiko = Amiko({ weight: '400', subsets: ['latin'] });

export default function Home() {
    return (
        <>
            <Header />
            <main className={styles.content}>
                <div className={styles.section1}>
                    <Image src={YoungMan} alt='Young Man Sitting' />
                    <div className={styles.text}>
                        <h1 className={hind.className}>Shop Fast</h1>
                        <h1 className={hind.className}>Shop Wise</h1>
                        <h1 className={hind.className}>Shop Better</h1>
                        <p className={hind.className}>DOWNLOAD NOW</p>
                    </div>
                    <div className={styles.logos}>
                        <Link
                            href='https://play.google.com/store/apps/details?id=com.tinie'
                            target='_blank'
                        >
                            <Image src={Google} alt='Google Play' />
                        </Link>
                        <Link
                            href='https://apps.apple.com/in/app/tinie/id6445862797'
                            target='_blank'
                        >
                            <Image src={Apple} alt='App Store' />
                        </Link>
                    </div>
                </div>
                <h1 className={`${paytone.className} ${styles.heading}`}>
                    THE ONE HYPERLOCAL LIFESTYLE APP
                </h1>
                <div className={styles.section2}>
                    <div className={styles.girl_cart}>
                        <Image src={GirlWithCart} alt='Girl with Cart' />
                        <h3 className={amiko.className}>
                            Explore The Curated Options
                        </h3>
                    </div>
                    <div className={styles.pick_price}>
                        <h3 className={amiko.className}>Pick The Best Price</h3>
                        <Image src={Coupons} alt='Coupons' />
                    </div>
                    <Image
                        src={MobileApp1}
                        alt='Mobile App'
                        className={styles.mobilephone}
                    />
                </div>
                <div className={styles.section3}>
                    <Image
                        src={MobileApp2}
                        alt='Mobile App'
                        className={styles.mobilephone}
                    />
                    sss
                </div>
            </main>
        </>
    );
}
