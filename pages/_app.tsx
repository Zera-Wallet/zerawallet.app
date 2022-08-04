import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                {/* Favicon */}
                <link rel="shortcut icon" href="/favicon.ico" />

                {/* Primary Meta Tags */}
                <title>Zera Wallet | The best open source Solana wallet</title>
                <meta
                    name="title"
                    content="Zera Wallet | The best open source Solana wallet"
                />
                <meta
                    name="description"
                    content="Enjoy all the features from the most popular Solana wallets and more. Plus it's completely open source!"
                />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.zerawallet.app" />
                <meta
                    property="og:title"
                    content="Zera Wallet | The best open source Solana wallet"
                />
                <meta
                    property="og:description"
                    content="Enjoy all the features from the most popular Solana wallets and more. Plus it's completely open source!"
                />
                <meta
                    property="og:image"
                    content="https://www.zerawallet.app/assets/zera-url-preview.png"
                />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:url"
                    content="https://www.zerawallet.app"
                />
                <meta
                    property="twitter:title"
                    content="Zera Wallet | The best open source Solana wallet"
                />
                <meta
                    property="twitter:description"
                    content="Enjoy all the features from the most popular Solana wallets and more. Plus it's completely open source!"
                />
                <meta
                    property="twitter:image"
                    content="https://www.zerawallet.app/assets/zera-url-preview.png"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
