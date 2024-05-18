module.exports = function override(config, env) {
  console.log('React app rewired works!')
  config.resolve.fallback = {
    fs: false,
    stream: false,
    zlib: false,
  }
  return config
}
