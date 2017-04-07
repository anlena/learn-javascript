var fs = require('fs');

var rs = fs.createReadStream('tt.txt', 'utf-8');

rs.on('data', function(chunk) {
    console.log("DATA");
    console.log(chunk);
});

rs.on('end', function(err) {
    console.log('END');
});

rs.on('err', function(err) {
    console.log('ERROR' + err);
})