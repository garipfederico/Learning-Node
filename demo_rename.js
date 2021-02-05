//The fs.rename() method renames the specified file:

var fs = require('fs');

// Rename "mynewfile1.txt" to "myrenamedfile.txt":
fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
});