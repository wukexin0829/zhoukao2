const http=require("http")
const fs=require("fs")
const server=http.createServer((req,res)=>{
    if(req.url==="/text"){
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.end('txt111sss')//buffer 字符串
    }else if(req.url==="/json"){
        //设置响应头
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify({code:1,list:[1,2,3]}))

    }else if(req.url==="/jpg"){
        res.writeHead(200,{'Content-Type':'image/jpg'})
        let imgBuf=fs.readFileSync('./1.png')
        res.end(imgBuf )
        
    }
})
server.listen(process.env.PORT||3000,()=>{
    console.log(process.pid)
    console.log("服务器启动成功")
})
//设置响应头
// setHeader('Content-Type','text/plain')b