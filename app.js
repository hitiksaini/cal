var port = process.env.PORT || 3000,
    http = require('http'),
    fs = require('fs'),
    html = fs.readFileSync('index.html');

var log = function(entry) {
    fs.appendFileSync('/tmp/sample-app.log', new Date().toISOString() + ' - ' + entry + '\n');
};

var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        var body = '';
        var num1= Number(req.body.num1);  //num1 is coming from index.htmml from form
        var num2= Number(req.body.num2);
        var result= num1+num2;
        res.send("result is "+ result);
                    
   
        req.on('data', function(chunk) {
            body += chunk;
        });

        req.on('end', function() {
            if (req.url === '/')
            {
                log('Received message: ' + body);
            }
             else if (req.url = '/scheduled')
              {
                log('Received task ' + req.headers['x-aws-sqsd-taskname'] + ' scheduled at ' + req.headers['x-aws-sqsd-scheduled-at']);
              }

            res.writeHead(200, 'OK', {'Content-Type': 'text/plain'});
            res.end();
        });
    } //post-ended
            else 
         {
      vvvvv  res.writeHead(200);
             res.write(html);
             res.end();
    }
});
server.listen(port);
console.log('Server running at http://127.0.0.1:' + port + '/');
