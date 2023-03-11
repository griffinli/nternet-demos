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
            <a href="https://1.thesearchengine.company/">Display only the page title</a>
            <a href="https://2.thesearchengine.company/">Search only curated &quot;high-quality&quot; sites</a>
            <a href="https://3.thesearchengine.company/">Immediately redirect to first result</a>
            <a href="https://4.thesearchengine.company/">Display all information</a>
            <a href="https://one.thesearchengine.company/">Clean interface (navigate with j, k, enter)</a>

            <h1>Graphs</h1>
            <a href="https://roamresearch.com/#/app/searchtest5/page/u2mj-0mD3">Web graph in Roam Research</a>
            <a href="https://roamresearch.com/#/app/searchtest5/graph">Roam Research Graph View</a>
            <a href="https://griffinli.notion.site/Web-Graphs-e8e2ed6fd4584be0a8d26f24457ff02d">Neo4j Graph</a>

            <h1>Other search engines</h1>
            <a href="https://community.thesearchengine.company/">Hacker News and Reddit search</a>
            <a href="http://ec2-44-199-219-222.compute-1.amazonaws.com:8080/">ChatGPT API + Google API (can also ask to generate an image, do math, write, etc.)</a>
            <a href="http://ec2-44-199-219-222.compute-1.amazonaws.com:8080/fast">Faster ChatGPT-based search engine (but less capable)</a>
        </>
    )
}
