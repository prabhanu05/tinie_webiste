import Header from '@/components/common/Header';
import SecondaryLayout from '@/components/common/SecondaryLayout';
import styles from '@/styles/Download.module.css';
import { Amiko } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import Apple from '/public/apple.png';
import Google from '/public/google.png';
import Logo from '/public/logo.png';
import PartnerLogo from '/public/tinie_partner.png';

const amiko = Amiko({ weight: '400', subsets: ['latin'] });

export default function Download() {
    return (
        <>
            <Header />
            <SecondaryLayout text='Download The App'>
                <div className={styles.container}>
                    <h3 className={amiko.className}>
                        Tinie World Is Just A Tap Away!!
                    </h3>
                    <div className={styles.subcontainer}>
                        <div className={styles.row}>
                            <Image alt='tinie' src={Logo} height={54} />
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
                        <div className={styles.row}>
                            <div className={styles.img}>
                                <Image alt='tinie partner' src={PartnerLogo} />
                            </div>
                            <Link
                                href='https://play.google.com/store/apps/details?id=com.tinie.partner'
                                target='_blank'
                            >
                                <Image src={Google} alt='Google Play' />
                            </Link>
                            <Link
                                href='https://apps.apple.com/in/app/tiniepartner/id6445958729'
                                target='_blank'
                            >
                                <Image src={Apple} alt='App Store' />
                            </Link>
                        </div>
                    </div>
                </div>
            </SecondaryLayout>
        </>
    );
}
