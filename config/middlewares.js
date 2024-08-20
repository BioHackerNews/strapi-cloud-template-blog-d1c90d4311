module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          'default-src': ["'self'", 'http:', 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'http://localhost:1337', 'https://generous-joy-85ba50b9af.strapiapp.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'http://localhost:1337', 'https://generous-joy-85ba50b9af.strapiapp.com'],
          'connect-src': ["'self'", 'http://localhost:1337', 'https://generous-joy-85ba50b9af.strapiapp.com'],
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:1337', 'http://localhost', 'https://generous-joy-85ba50b9af.strapiapp.com'], // Разрешенные источники
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
