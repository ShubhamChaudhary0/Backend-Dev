const express = require("express");
const app = express();

const authMiddleware = ((req , res , next) =>{
    const auth = req.header("authorization");

if(auth == "admin123"){
    next();
}
else{
    resp.status(403).json({msg : "access denied"});
}
});
 
app.get("/public",(req,res)=> {
    res.send("Assessible to everyone");
});

app.get("/private",authMiddleware , (req, res) => {
    res.send("private route");
});
app.listen(5000,()=>{
    console.log("server started");
}); 
