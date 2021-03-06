Package.describe({
  name: 'andruschka:ga-extractor',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Extract reports from Google Analytics.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/andruschka/meteor-ga-extractor.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "tap-consumer": "0.0.1",
  "ga-extractor": "0.6.0"
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2');
  api.addFiles('ga-extractor.js', 'server');
  api.export('GaExtractor', 'server');
});
