const config = {
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    html: '<html lang="us-EN"></html>',
    url: 'https://woodstockcodingcamp.org/',
    userAgent: 'Agent/007',
  },
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/build/css_mock.js",
    "\\.(jpeg|jpg|gif|ttf|eot|svg|webp)$": "<rootDir>/build/file_mock.js"
  }
}

module.exports = config;
