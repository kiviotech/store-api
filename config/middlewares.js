module.exports = ({ env }) => [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'https://store.dhairyawanhsc.com', // Production frontend
        'http://localhost:1337', // Strapi backend (local)
        'http://localhost:8081', // React Native Metro Bundler
        'http://192.168.0.102:1337', // Local network access
        'http://192.168.0.102:8081' // React Native on local network
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      credentials: true // Allow cookies and auth headers
    },
  },
  {
    name: 'strapi::body',
    config: {
      formLimit: '2gb',  
      jsonLimit: '2gb',  
      textLimit: '2gb',  
      formidable: {
        maxFileSize: 2 * 1024 * 1024 * 1024 
      }
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
