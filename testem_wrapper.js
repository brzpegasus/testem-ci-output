/*
testem@0.3.9
Seems to either not output anything or truncate the output,
at least on Windows

- Expected:
ok 1 PhantomJS 1.9 - hello should say hello
ok 2 PhantomJS 1.9 - hello should say hello to person

1..2
# tests 2
# pass  2
# fail  0

- Actual:
ok 1 PhantomJS 1.9 - hello should say hello
ok 2 PhantomJS 1.9 - hello should say hello to person

*/
var exec = require('child_process').exec;

exec('testem ci', function (err, stdout, stderr) {
  if (err) throw err;
  if (stdout) console.log(stdout);
  if (stderr) console.error(stderr);
});
