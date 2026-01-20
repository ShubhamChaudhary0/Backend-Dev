 const fs= require('fs');
// const readstream=fs.createReadStream("./sample.txt",{
//     encoding: "utf-8",
//     highWaterMark:16*1024   
// });

// readstream.on("data",(chunk)=>{
//     console.log("chunk recived",chunk.length);
    
// });

// readstream.on("end",()=>{
//     console.log("file reading completed");
// });

/////////write stream/////////

// const writeStream=fs.createWriteStream("./sample.txt");
// writeStream.write("hello GLA\n");
// writeStream.write("welcome to stream\n");
// writeStream.end();


////////transform stream/////////

// const {Transform}=require('stream');
// const upperCaseTransform=new Transform({
//     transform(chunk,encoding,callback){
//         const modifiedData=chunk.toString().toUpperCase();
//         this.push (modifiedData);
//         callback();
//     }
// });

// //pipeflow
// fs.createReadStream("./sample.txt")
// .pipe(upperCaseTransform)
// .pipe(fs.createWriteStream("./unknown.txt"));

