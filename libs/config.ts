const config = {
  apiBaseUrl: 'http://localhost:3000'
}

switch (process.env.NODE_END) {
  case 'production':
    config.apiBaseUrl = 'https://mtl-eco-backend.herokuapp.com'
    break
}

export default config
