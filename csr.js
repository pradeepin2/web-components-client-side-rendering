const express = require("express");
const fs = require('fs'); 
const app = express();
const port = 3000;
const content = fs.readFileSync("./csr.html","utf-8").toString();
app.get("/csr", async(req,res) => {
    res.send(content);
});
app.listen(port, ()=>{
 console.log(`Example Client side rendering Webcomponents running on  ${port}`);
});
