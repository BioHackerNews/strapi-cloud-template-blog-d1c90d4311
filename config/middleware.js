module.exports = ({ env }) => ({
    settings: {
      cache: {
        enabled: true,
        type: 'redis',
        maxAge: 3600000, // 1 hour in milliseconds
        redisConfig: {
          host: '127.0.0.1',
          port: 6379,
          password: env('REDIS_PASSWORD', null),
        },
        models: [
          'article', // Кеширование модели article
        ],
      },
    },
  });
