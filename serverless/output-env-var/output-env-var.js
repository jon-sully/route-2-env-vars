// Just remember that order-of-operations matters so if you update your ENV
// vars on Netlify admin UI, you _will_ need to push a diff'd Function in order
// to cause the re-packaging sequence to occur
exports.handler = async _ => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      secret: contextualEnv('API_KEY'),
    }) 
  }
}
