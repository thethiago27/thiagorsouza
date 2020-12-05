import readdir from '../../../lib/readdir'
import fs from "fs";
import path from "path";

export default async function handler(req, res) {

    res.setHeader('Content-Type', 'application/json')

    fs.readFile(path.join(process.cwd(), 'pages/api/blog/endpoint/posts.json'), 'utf8', (err, data) => {

        let format = JSON.parse(data)

        res.end(JSON.stringify({res: format}))

    })

}
