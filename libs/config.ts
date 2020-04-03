const config = {
  apiBaseUrl: 'https://mtl-eco-backend-staging.herokuapp.com'
}

switch (process.env.NODE_END) {
  case 'production':
    config.apiBaseUrl = 'https://mtl-eco-backend.herokuapp.com'
    break
}

export default config
