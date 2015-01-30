Package.describe({
  name: 'pascoual:pdftk',
  summary: 'PDFTK wrapper for Meteor',
  version: '0.5.0',
  git: 'https://github.com/pascoual/meteor-pdftk.git'
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.3', 'METEOR@0.9.4', 'METEOR@1.0']);
  api.use(['underscore'], 'server');
  api.export('PDFTK');
  api.addFiles('pdftkWrapper.js', 'server');
});
