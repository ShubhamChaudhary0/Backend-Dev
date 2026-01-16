const fs=require("fs");
fs.writeFileSync("./example.txt", "Hello, World!");
// const result=fs.readFileSync("./example.txt", "utf8");
// console.log(result);
fs.readFile("./unknown.txt", "utf8", (err, result) => {
    if (err) {
        console.error(err);
    } else {
        console.log(result);
    }
});
// fs.appendFile("./example.txt", `${Date.now()} hey there\n`, (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     else{
//         console.log(Date.now());
//     }
// });
// fs.cpSync("./example.txt", "./backup.txt");
// fs.unlinkSync("./backup.txt");
// console.log(fs.statSync("./unknown.txt").isFile());
fs.mkdirSync("./new_directory/a/b", { recursive: true });