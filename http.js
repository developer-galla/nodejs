const http = require('http');

const server = http.createServer((req,res)=>{
   if(req.url === '/'){
       res.end('galla');
   }
   if(req.url === '/about'){
      res.end('jayaprakash');
   }
   res.end(`
       <h1>!Ooops</h1>
       <p>Please Back to page!!!</p>`
   )
})

server.listen(5000);