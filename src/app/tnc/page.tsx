'use client';

import Header from '@/components/common/Header';
import styles from '@/styles/TnC.module.css';
import Link from 'next/link';

export default function TnC() {
    return (
        <>
            <Header />
            <main className={styles.container}>
                <h1>Terms and Conditions</h1>
                <div className={styles.content}>
                    <p>
                        By downloading or using the app, these terms will
                        automatically apply to you - you should make sure
                        therefore that you read them carefully before using the
                        app. You're not allowed to copy or modify the app, any
                        part of the app, or our trademarks in any way. You're
                        not allowed to attempt to extract the source code of the
                        app, and you also shouldn't try to translate the app
                        into other languages or make derivative versions. The
                        app itself, and all the trademarks, copyright, database
                        rights, and other intellectual property rights related
                        to it, still belong to tinie business private limited.
                    </p>

                    <p>
                        tinie business private limited is committed to ensuring
                        that the app is as useful and efficient as possible. For
                        that reason, we reserve the right to make changes to the
                        app or to charge for its services, at any time and for
                        any reason. We will never charge you for the app or its
                        services without making it very clear to you exactly
                        what you're paying for.{' '}
                    </p>

                    <p>
                        The tinie app stores and processes personal data that
                        you have provided to us, to provide our Service. It's
                        your responsibility to keep your phone and access to the
                        app secure. We therefore recommend that you do not
                        jailbreak or root your phone, which is the process of
                        removing software restrictions and limitations imposed
                        by the official operating system of your device. It
                        could make your phone vulnerable to
                        malware/viruses/malicious programs, compromise your
                        phone's security features and it could mean that the
                        tinie app won't work properly or at all.
                    </p>

                    <p>
                        The app does use third-party services that declare their
                        Terms and Conditions.
                    </p>

                    <h4>
                        Link to Terms and Conditions of third-party service
                        providers used by the app
                    </h4>

                    <ul>
                        <li>
                            <Link
                                href='https://policies.google.com/privacy'
                                target='_blank'
                            >
                                Google Play Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='https://support.google.com/admob/answer/6128543'
                                target='_blank'
                            >
                                AdMob
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='https://www.google.com/analytics/terms'
                                target='_blank'
                            >
                                Google Analytics for Firebase
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='https://firebase.google.com/support/privacy'
                                target='_blank'
                            >
                                Firebase Crashlytics
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='https://www.facebook.com/about/privacy/update/printable'
                                target='_blank'
                            >
                                Facebook
                            </Link>
                        </li>
                    </ul>

                    <p>
                        You should be aware that there are certain things that
                        tinie business private limited will not take
                        responsibility for. Certain functions of the app will
                        require the app to have an active internet connection.
                        The connection can be Wi-Fi or provided by your mobile
                        network provider, but tinie business private limited
                        cannot take responsibility for the app not working at
                        full functionality if you don't have access to Wi-Fi,
                        and you don't have any of your data allowance left.
                    </p>

                    <p>
                        If you're using the app outside of an area with Wi-Fi,
                        you should remember that the terms of the agreement with
                        your mobile network provider will still apply. As a
                        result, you may be charged by your mobile provider for
                        the cost of data for the duration of the connection
                        while accessing the app, or other third-party charges.
                        In using the app, you're accepting responsibility for
                        any such charges, including roaming data charges if you
                        use the app outside of your home territory (i.e. region
                        or country) without turning off data roaming. If you are
                        not the bill payer for the device on which you're using
                        the app, please be aware that we assume that you have
                        received permission from the bill payer for using the
                        app.
                    </p>

                    <p>
                        Along the same lines, tinie business private limited
                        cannot always take responsibility for the way you use
                        the app i.e. You need to make sure that your device
                        stays charged - if it runs out of battery and you can't
                        turn it on to avail the Service, tinie business private
                        limited cannot accept responsibility.
                    </p>
                    <p>
                        With respect to tinie business private limited's
                        responsibility for your use of the app, when you're
                        using the app, it's important to bear in mind that
                        although we endeavor to ensure that it is updated and
                        correct at all times, we do rely on third parties to
                        provide information to us so that we can make it
                        available to you. tinie business private limited accepts
                        no liability for any loss, direct or indirect, you
                        experience as a result of relying wholly on this
                        functionality of the app.
                    </p>

                    <p>
                        At some point, we may wish to update the app. The app is
                        currently available on Android - the requirements for
                        the system(and for any additional systems we decide to
                        extend the availability of the app to) may change, and
                        you'll need to download the updates if you want to keep
                        using the app. tinie business private limited does not
                        promise that it will always update the app so that it is
                        relevant to you and/or works with the Android version
                        that you have installed on your device. However, you
                        promise to always accept updates to the application when
                        offered to you, We may also wish to stop providing the
                        app, and may terminate use of it at any time without
                        giving notice of termination to you. Unless we tell you
                        otherwise, upon any termination, (a) the rights and
                        licenses granted to you in these terms will end; (b) you
                        must stop using the app, and (if needed) delete it from
                        your device.
                    </p>

                    <h4>Changes to This Terms and Conditions</h4>

                    <p>
                        We may update our Terms and Conditions from time to
                        time. Thus, you are advised to review this page
                        periodically for any changes. We will notify you of any
                        changes by posting the new Terms and Conditions on this
                        page.
                    </p>

                    <p>
                        These terms and conditions are effective as of
                        2022-07-25
                    </p>

                    <h4>Contact Us</h4>

                    <p>
                        If you have any questions or suggestions about our Terms
                        and Conditions, do not hesitate to contact us at{' '}
                        <Link href='mailto:info@tinie.in'>info@tinie.in</Link>.
                    </p>
                </div>
            </main>
        </>
    );
}
