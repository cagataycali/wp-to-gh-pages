var fs = require('fs');
var exec = require('child_process').exec;

// Rename all markdown files.
exec(`cd posts && ls`, function (error, stdout, stderr) {
  if (error) console.log(error);
  var files = stdout.split('\n');
  files.forEach(function(file) {
  var filePath = `posts/${file}`;
    fs.readFile(filePath, function(err, data) { // read file to memory
    if (!err) {
        data = data.toString(); // stringify buffer
        data = data.split('\n').splice(13, data.split('\n').length).join('\n');
        console.log(data);

        fs.writeFile(filePath, data, function(err) { // write file
            if (err) { // if error, report
                console.log (err);
            }
        });
    } else {
        console.log(err);
    }
    });
  })
});
