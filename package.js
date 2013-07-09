Package.describe({
  summary: "Sexy form elements with jQuery. Now with HTML5 attributes!"
});

Package.on_use(function (api, where) {
  api.use('jquery');

  api.add_files('lib/jquery.uniform.js', 'client');
  api.add_files('lib/themes/default/css/uniform.default.css', 'client');
  api.add_files('lib/themes/default/images/bg-input.png', 'client');
  api.add_files('lib/themes/default/images/bg-input-focus.png', 'client');
  api.add_files('lib/themes/default/images/sprite.png', 'client');

  // Added to fix img paths
  api.add_files('uniform.override.css', 'client');
});