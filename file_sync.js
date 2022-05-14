const {readFileSync,writeFileSync}=require('fs')
const first=readFileSync('./content/first.txt','utf-8')
const second=readFileSync('./content/second.txt','utf-8')
console.log(`${first} ${second}`)

writeFileSync('./content/result_sync.txt',`result is ${first} ${second}`)
//append
writeFileSync('./content/result_sync.txt',` appended string`,{flag:'a'})
