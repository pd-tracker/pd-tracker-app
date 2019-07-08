module.exports = function(api) {
  api.cache(true);

  const presets = ['babel-preset-expo'];

  const plugins = [['babel-plugin-root-import', {
      "rootPathSuffix": "src",
      "rootPathPrefix": "~"
  }]];

  return {
    presets,
    plugins
  };
};
