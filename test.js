var http = require("http");
const dt = require("./date");
const fs = require("fs");
const url = require("url");

http
  .createServer(function (req, res) {
    // const q = url.parse(req.url, true);
    // const checkfilename = function () {
    //   const filename = "." + q.pathname;
    //   if (filename === "./") {
    //     return "./index.html";
    //   } else return filename;
    // };
    // const filename = "." + q.pathname;
    let path = "";
    switch (req.url) {
      case "/":
        path += "index.html";
        break;
      case "/index":
        path += "index.html";
        break;
      case "/about":
        path += "about.html";
        break;
      case "/contact":
        path += "contact-me.html";
        break;
      case "/style.css":
        path += "style.css";
        break;
      default:
        path += "404.html";
        break;
    }
    if (path === "style.css") {
      res.writeHead(200, { "Content-Type": "text/css" });
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
    }
    // res.write("The date and time are " + dt.mydate());
    fs.readFile(path, function (error, data) {
      if (error) {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("Error");
      } else {
        res.write(data);
      }
      res.end();
    });
  })
  .listen(8080);
