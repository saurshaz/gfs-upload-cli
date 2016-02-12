import childProcess from 'child_process';
import test from 'ava';

test.cb(t => {
    childProcess.execFile('./cli.js', ['-V'], {cwd: __dirname}, (err, stdout) => {
        t.ifError(err);
        t.true(stdout.trim().length > 1);
        t.end();
    });
});