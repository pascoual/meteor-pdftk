Package.describe({
  summary: "PDFTK wrapper for Meteor"
});

Package.on_use(function (api) {
  api.use(['underscore'], 'server');

  api.export('PDFTK');

  api.add_files(['pdftkWrapper.js'], 'server');
});