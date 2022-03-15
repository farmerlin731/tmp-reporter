module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/tmp-reporter/dist/'
      : '/'
  }