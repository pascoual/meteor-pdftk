var exec = Npm.require('child_process').exec;
var fs = Npm.require('fs');

if (PDFTK === undefined)
  PDFTK = {};

/**
 * Execute PTFTK in command line
 * @param  {array}    args: pdftk args
 * @param  {Function} callback: ...hum... the callback!
 */
PDFTK.execute = function (args, callback) {
  var command = 'pdftk ' + args.join(' ');
  exec(command, {encoding: 'binary', maxBuffer: 1024 * 1000}, function(err, stdout, stderr) {
    if(err) return callback(new Error(err));
    callback(null, new Buffer(stdout, 'binary'));
  });
};

/**
 * Methodes return a Buffer with result PDFTK command
 */

PDFTK.pages = function(pdf, start, end, callback) {
  var range = (start || 1) + '-' + (end || 'end');
  PDFTK.execute([pdf, 'cat', range, 'output -'], callback);
};

PDFTK.fillForm = function(pdf, xfdf, callback) {
  PDFTK.execute([pdf, 'fill_form ', xfdf, 'output - flatten'], callback);
};

/**
 * Stamp
 * Ex: pdftk sample.pdf stamp stamp.pdf output -
 */
PDFTK.stamp = function(pdf, stamp, output, callback) {
  PDFTK.execute([pdf, 'stamp', stamp, 'output', output], callback);
};

PDFTK.multistamp = function(pdf, stamp, output, callback) {
  PDFTK.execute([pdf, 'multistamp', stamp, 'output', output], callback);
};
