const express = require("express");
const crypto = require('crypto');
const fs = require("fs");
const port = 3000;
const path = require('path');
const app = express();

app.use((req, res, next) => {
    const nonce = crypto.randomBytes(8).toString('hex');
    if (req.path === '/' && req.get('Accept')?.includes('text/html')) {
        const indexPath = path.join(__dirname, '/dist/browser/index.html');
        fs.readFile(indexPath, "utf8", (err, data) => {
          if (err) {
            return next(err);
          }
          // ToDo 1: Replace the string "myRandomNonce" with the value you used inside the 'ngCspNonce'-Attribute
          const modifiedHtml = data.replace(/myRandomNonce/g, nonce);
    
          // ToDo 2: Set the same Content-Security-Policy as before in the meta-Tag. But insted of using a hash for the script-src, use the nonce. (nonce-${nonce})
          res.setHeader('Content-Security-Policy', ``);
          res.send(modifiedHtml);
        });
      } else {
        next();
      }
  })
app.use(express.static(path.join(__dirname, '/dist/browser')));

app.listen(port, () => console.log(`The server is listening at http://localhost:${port}`));
