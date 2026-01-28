const http=require("http");
function handler(req,res){
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    res.end("This is my first server");
}
const server = http.createServer(handler);
server.listen(8000,()=>{
    console.log("Server is running at address http://localhost:8000");
});