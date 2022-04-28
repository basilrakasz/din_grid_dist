const PROXY_CONFIG = [
  {
    context: [
      '/user',
      '/service'
    ],
    // idk why but somehow index.html needs to be in url else not found (xs-app.json config?)
    target: 'http://localhost:5000/index.html/',
    secure: false,
    changeOrigin: true,
    logLevel: 'debug'
  }
];

module.exports = PROXY_CONFIG;
