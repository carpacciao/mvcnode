module.exports = {
  origin: ['*'], // an array of origins or 'ignore'
  headers: ["Accept", "Authorization", "Content-Type", "If-None-Match", "Accept-language"], // an array of strings - 'Access-Control-Allow-Headers' 

  exposedHeaders: ['Accept'], // an array of exposed headers - 'Access-Control-Expose-Headers',
  // additionalExposedHeaders: ['Accept'], // an array of additional exposed headers
  additionalHeaders: ['cache-control', 'x-requested-with'],
  maxAge: 60,
  credentials: true // boolean - 'Access-Control-Allow-Credentials'
}