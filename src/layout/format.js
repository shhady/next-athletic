import Header from "@/components/Header/Header"
import Head from "next/head"
import Footer from "@/components/footer/Footer"
export default function format({children}) {
  return (
    <div>
        <Head>
        <title>Athletic GYM</title>
            <meta name="description" content="Best gym in the northh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoTitle.png" />
        </Head>
            <Header/>
            <main style={{minHeight:"80vh"}}>{children}</main>
            <div>
            <Footer />
            </div>
    </div>
  )
}
