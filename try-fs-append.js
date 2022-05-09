// https://www.w3schools.com/nodejs/nodejs_filesystem.asp

var fs = require('fs');

data = `
<html>
  <body>
    <h1>My Header</h1>
    <p>My paragraph.</p>
  </body>
</html>
`;

fs.appendFile('createdHTML.html', data, function (err) {
  if (err) throw err;
  console.log('Saved!');
});