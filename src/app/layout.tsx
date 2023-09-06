import type { Metadata } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import './globals.css';

const ibmPlexSans = IBM_Plex_Sans({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'tinie',
    description: 'One Stop for all your lifestyle needs',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <head>
                <link
                    rel='apple-touch-icon'
                    sizes='180x180'
                    href='/apple-touch-icon.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                    href='/favicon-32x32.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='16x16'
                    href='/favicon-16x16.png'
                />
                <link rel='icon' href='/favicon.ico' sizes='any' />
                <link rel='manifest' href='/site.webmanifest' />
            </head>
            <body className={ibmPlexSans.className}>{children}</body>
        </html>
    );
}
