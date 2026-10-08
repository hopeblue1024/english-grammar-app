/**
 * babel.config.js
 * ----------------------------------------------------------------
 * Babel configuration for React Native / Expo.
 * The preset handles JSX transformation and other features.
 * ----------------------------------------------------------------
 */

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
