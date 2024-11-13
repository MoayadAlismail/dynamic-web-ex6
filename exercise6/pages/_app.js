import Header from "@/components/Header/Header"

export default function App({ Component, pageProps }) {
    console.log('pageProps:', pageProps); // Log pageProps to the console
    return (
        <>
            <Header/>
            <Component {...pageProps} />
            
        </>
    );  
}