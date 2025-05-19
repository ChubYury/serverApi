module.exports = (req, res, next) => {
  
  res.set('Access-Control-Allow-Headers', 
          'Origin, X-Requested-With, Content-Type, Accept, ngrok-skip-browser-warning');
  res.set('Access-Control-Allow-Origin', 
          '*');
  res.set('Access-Control-Allow-Methods', 
          'OPTIONS,GET,POST,PUT,DELETE');
  res.set('Content-Security-Policy', 
          "connect-src 'self' data: https://assets.grok.com https://prodregistryv2.org https://*.statsig.com https://featuregates.org https://statsigapi.net https://*.statsigapi.net https://*.statsigcdn.com https://featureassets.org https://assetsconfigcdn.org https://prodregistryv2.org https://cloudflare-dns.com https://beyondwickedmapping.org https://*.x.ai https://*.stripe.com https://featureassets.org https://*.googleapis.com https://*.google.com https://*.withgoogle.com https://*.gstatic.com https://*.googletagmanager.com https://*.google-analytics.com https://*.microsoftonline.com https://*.live.com https://*.microsoft.com https://*.onedrive.com https://*.ngrok-free.app");
  res.set('Content-Type', 
          'application/json');

  if (req.method === 'OPTIONS') return res.sendStatus(200);
  
  next();
}