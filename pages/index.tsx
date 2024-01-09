import Head from 'next/head'
import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return (
        <>
            <Head>
                <title>Demos</title>
                <link rel="preconnect" href="https://rsms.me/"/>
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
            </Head>

            <h1>Initial experiments</h1>
            <a href="https://1.nternet.xyz/">Display only the page title</a>
            <a href="https://2.nternet.xyz/">Search only curated &quot;high-quality&quot; sites</a>
            <a href="https://3.nternet.xyz/">Immediately redirect to first result</a>
            <a href="https://one.nternet.xyz/">Clean interface (navigate with j, k, enter)</a>

            <h1>Graphs</h1>
            <a href="https://roamresearch.com/#/app/searchtest5/graph">Web graph in Roam Research</a>
            <a href="https://griffinli.notion.site/Web-Graphs-e8e2ed6fd4584be0a8d26f24457ff02d">Neo4j Graph</a>

            <h1>AI</h1>
            <a href="https://searchgpt.griffinli.vercel.app">ChatGPT API + Google API</a>
        </>
    )
}
