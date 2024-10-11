const svgr = require('@svgr/rollup');
const postcss = require('rollup-plugin-postcss');

module.exports = {
  rollup(config, options) {
    config.plugins.push(svgr());
    config.plugins.push(postcss());
    return config;
  },
};
