var fs = require('fs');
var exec = require('child_process').exec;

// Rename all markdown files.
exec(`cd posts && ls`, function (error, stdout, stderr) {
  if (error) console.log(error);
  var files = stdout.split('\n');
  files.forEach(function(file) {

    var fileString = file.split('-'); // array
    fileString.splice(0, 1);
    var newName = fileString.join('-');
    fs.rename(`posts/${file}`, `posts/${newName}`, function (err) {
      if (err) throw err;
      console.log(`${file} renamed to ${newName}`);
    });
  })
});
