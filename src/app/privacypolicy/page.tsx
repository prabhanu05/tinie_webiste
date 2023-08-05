'use client';

import Header from '@/components/common/Header';
import styles from '@/styles/PrivacyPolicy.module.css';
import Link from 'next/link';

export default function PrivacyPolicy() {
    return (
        <>
            <Header />
            <main className={styles.container}>
                <h1>Privacy Policy</h1>
                <div className={styles.content}>
                    <p>
                        tinie business private limited built the tinie app as a
                        Commercial app. This SERVICE is provided by tinie
                        business private limited and is intended for use as is.
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
                        This page is used to inform visitors regarding our
                        policies with the collection, use, and disclosure of
                        Personal Information if anyone decided to use our
                        Service.
                    </p>

                    <p>
                        If you choose to use our Service, then you agree to the
                        collection and use of information in relation to this
                        policy. The Personal Information that we collect is used
                        for providing and improving the Service. We will not use
                        or share your information with anyone except as
                        described in this Privacy Policy.
                    </p>

                    <p>
                        The terms used in this Privacy Policy have the same
                        meanings as in our Terms and Conditions, which are
                        accessible at tinie unless otherwise defined in this
                        Privacy Policy.
                    </p>

                    <h4>Information Collection and Use</h4>

                    <p>
                        For a better experience, while using our Service, we may
                        require you to provide us with certain personally
                        identifiable information, including but not limited to
                        phone, email, name, location. The information that we
                        request will be retained by us and used as described in
                        this privacy policy.
                    </p>

                    <p>
                        The app does use third-party services that may collect
                        information used to identify you.
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
                        We want to inform you that whenever you use our Service,
                        in a case of an error in the app we collect data and
                        information (through third-party products) on your phone
                        called Log Data. This Log Data may include information
                        such as your device Internet Protocol (“IP”) address,
                        device name, operating system version, the configuration
                        of the app when utilizing our Service, the time and date
                        of your use of the Service, and other statistics.
                    </p>

                    <h4>Cookies</h4>

                    <p>
                        Cookies are files with a small amount of data that are
                        commonly used as anonymous unique identifiers. These are
                        sent to your browser from the websites that you visit
                        and are stored on your device's internal memory.
                    </p>

                    <p>
                        This Service does not use these “cookies” explicitly.
                        However, the app may use third-party code and libraries
                        that use “cookies” to collect information and improve
                        their services. You have the option to either accept or
                        refuse these cookies and know when a cookie is being
                        sent to your device. If you choose to refuse our
                        cookies, you may not be able to use some portions of
                        this Service.
                    </p>

                    <h4>Service Providers</h4>

                    <p>
                        We may employ third-party companies and individuals due
                        to the following reasons:
                    </p>

                    <p>
                        <li>To facilitate our Service;</li>
                        <li>To provide the Service on our behalf;</li>
                        <li>To perform Service-related services; or</li>
                        <li>
                            To assist us in analyzing how our Service is used.
                        </li>
                    </p>

                    <p>
                        We want to inform users of this Service that these third
                        parties have access to their Personal Information. The
                        reason is to perform the tasks assigned to them on our
                        behalf. However, they are obligated not to disclose or
                        use the information for any other purpose.
                    </p>

                    <h4>Security</h4>

                    <p>
                        We value your trust in providing us your Personal
                        Information, thus we are striving to use commercially
                        acceptable means of protecting it. But remember that no
                        method of transmission over the internet, or method of
                        electronic storage is 100% secure and reliable, and we
                        cannot guarantee its absolute security.
                    </p>

                    <h4>Links to Other Sites</h4>

                    <p>
                        This Service may contain links to other sites. If you
                        click on a third-party link, you will be directed to
                        that site. Note that these external sites are not
                        operated by us. Therefore, we strongly advise you to
                        review the Privacy Policy of these websites. We have no
                        control over and assume no responsibility for the
                        content, privacy policies, or practices of any
                        third-party sites or services.
                    </p>

                    <h4>Children's Privacy</h4>

                    <p>
                        These Services do not address anyone under the age of
                        13. We do not knowingly collect personally identifiable
                        information from children under 13 years of age. In the
                        case we discover that a child under 13 has provided us
                        with personal information, we immediately delete this
                        from our servers. If you are a parent or guardian and
                        you are aware that your child has provided us with
                        personal information, please contact us so that we will
                        be able to do the necessary actions.
                    </p>

                    <h4>Changes to This Privacy Policy</h4>

                    <p>
                        We may update our Privacy Policy from time to time.
                        Thus, you are advised to review this page periodically
                        for any changes. We will notify you of any changes by
                        posting the new Privacy Policy on this page.
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
