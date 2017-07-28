let express = require('express');
let app = express();

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

app.use('/', express.static('public'));