import Head from 'next/head'
import {APP_TITLE} from "../lib/settings";

export default function Meta({title, page_desc}) {

    return (
        <Head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>{title} | {APP_TITLE}</title>
            <meta name="theme-color" content="#000" />
            <script src="https://kit.fontawesome.com/8988a86ddd.js" crossOrigin="anonymous"/>
            <meta
                name={page_desc}
                content={page_desc}
            />
        </Head>
    )


}
