/**
 * some configurations for the app.
 */
module.exports.config = {
  // express listen port.
  expressPort: 18900,
  // the remote server information.
  server: 'commons.wikimedia.org',
  path: '/w',
  /**
   * swap the base URL for Web resources: images, videos, etc.
   */
  remoteUrl: 'https://upload.wikimedia.org/wikipedia/commons',
  localUrl: '/images'
}
