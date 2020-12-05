import readdir from '../../../lib/readdir'
import fs from "fs";
import path from "path";

export default async function getPostById(req, res) {

    const {
        query: {post, name},
        method,
    } = req

    fs.readFile(path.join(process.cwd(), 'pages/api/blog/endpoint/posts.json'), 'utf8', (err, data) => {

        let format = JSON.parse(data)

        let filter = format.filter((result) => {
            return result.url === post
        })

        res.setHeader('Content-Type', 'application/json')

        res.json(JSON.stringify({postL: filter}))

    })




}

