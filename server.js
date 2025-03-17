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
          const modifiedHtml = data.replace(/myRandomNonce/g, nonce);
    
          res.setHeader('Content-Security-Policy', 
            `default-src 'none'; script-src 'self' 'nonce-${nonce}'; connect-src 'self' http://localhost:4730; img-src 'self'; style-src 'self' 'unsafe-inline';`);
          res.send(modifiedHtml);
        });
      } else {
        next();
      }
  })
app.use(express.static(path.join(__dirname, '/dist/browser')));

app.listen(port, () => console.log(`The server is listening at http://localhost:${port}`));
