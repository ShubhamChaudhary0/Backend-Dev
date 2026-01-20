const http = require("http");
// Plain Text
// const server = http.createServer((req, res) => {
//   res.writeHead(200, {
//     "content-type": "plain/text",
//   });
//   res.end("Hello");
// });

//How to render HTML
// const server = http.createServer((req, res) => {
//   if (req.url === "/home") {
//     res.writeHead(200, {
//       "content-type": "text/html",
//     });
//     res.end("<h1> Home Page</h1>");
//   } else if (req.url === "/about") {
//     res.writeHead(200, {
//       "content-type": "text/html",
//     });
//     res.end("<h1>About Page</h1>");
//   }
//   res.writeHead(200, {
//     "content-type": "text/html",
//   });
//   res.end("<h1> Server is running</h1>");
// });

// JS Object
let user = {
  username: "akash",
  email: "akash@gmail.com",
};
// JSON Object
// let json= {
//     "username":"akash",
//     "email":"akash@gmail.com"
// }

// JSON.stringify(user) js object-> json string
// JSON.parse() json string-> json data
// How to render JSON data
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "content-type": "application/json",
  });
//   res.end(user);
res.end(JSON.stringify({
ghj:"dsjsnv", user
}));
})

server.listen(8000, () => {
  console.log("Server is running");
});