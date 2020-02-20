const fs = require('fs');

// destination.txt will be created or overwritten by default.
fs.copyFile('src/CNAME', 'dist/CNAME', (err) => {
    if (err) throw err;
    console.log('CNAME COPIED');
});