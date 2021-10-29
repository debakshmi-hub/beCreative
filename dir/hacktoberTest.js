if (pathname == '/pitagoras') {
        fs.readFile('./pitagoras.htm', function(error, content) {
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            response.end(content);
        });
  
  else if (pathname == '/apaga') {
				const { exec, spawn } = require('child_process');
				exec('apagar.bat, (err, stdout, stderr) => {
				  if (err) {
					console.error(err);
					return;
				  }
				  console.log(stdout);
				});
