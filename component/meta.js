import NextHead from 'next/head'
import {APP_TITLE} from "../lib/settings";

export default function Meta({title, page_desc, html_url}) {

    return (
        <NextHead>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>{title} | {APP_TITLE}</title>
            <meta name="title" content={APP_TITLE}/>

            <meta name="theme-color" content="#000" />
            <script src="https://kit.fontawesome.com/8988a86ddd.js" crossOrigin="anonymous"/>
            <meta
                name={`description`}
                content={page_desc}
            />

            {/*  FACEBOOK TAGS   */}
            <meta property="og:type" content="website"/>
            <meta property="og:url" content={`https://thiagorsouza.xyz/${html_url}`}/>
            <meta property="og:title" content={`${title} | ${APP_TITLE}`}/>
            <meta property="og:description" content={page_desc}/>
            <meta property="og:image" content={`https://i.imgur.com/D0DdO1r.jpg`}/>

        </NextHead>
    )


}
