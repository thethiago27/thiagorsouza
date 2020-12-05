import fs from 'fs'
import path from 'path'

export default function readdir(file) {

    return new Promise((resolve) => {
        fs.readFile(path.join(process.cwd(), file), 'utf8', (err, data) => {
            let format = JSON.parse(data)
            resolve(format)
        })
    })
}
