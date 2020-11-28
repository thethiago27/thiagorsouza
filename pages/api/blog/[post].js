import fs from 'fs'
import path from 'path'


export default async function getPostById(req, res) {

    const {
        query: {post, name},
        method,
    } = req
    res.setHeader('Content-Type', 'application/json')

    const postL = await getPost(post)

    res.json(JSON.stringify({postL}))


}

const getPost = (id) => {
    return new Promise((resolve => {
        fs.readFile(path.join(process.cwd(), `pages/api/blog/endpoint/posts.json`), 'utf8',  (err,data) => {
            if (err) {
                return console.log(err)
            }
            let dataFormated = JSON.parse(data)

            let result = dataFormated.filter((obj) => {
                 return obj.url == id
            })
            resolve(result)
        })
    }))
}
