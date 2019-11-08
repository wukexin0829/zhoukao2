const child_process=require("child_process");
const fs=require("fs")
const child=child_process.spawn('node',['./server.js'])
let water=fs.watch('./server.js')
water.on('change',()=>{
    console.log("server。变化")
    //把子进程杀死 创建一个新的子进程
    child.kill();
    let child=child_process.spawn('node',['./server.js'])

})
console.log(child.pid)