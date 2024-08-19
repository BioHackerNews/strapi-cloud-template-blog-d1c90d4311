module.exports = ({ env }) => ({
  settings: {
    cache: {
      enabled: true,
      type: 'redis',
      maxAge: 3600000, // 1 hour in milliseconds
      redisConfig: {
        host: env('REDIS_HOST', null), // Подключаемся к Redis, работающему в Docker
        port: env('REDIS_PORT', null),         // Порт по умолчанию для Redis
        password: env('REDIS_PASSWORD', null), // Если у вас настроен пароль для Redis, укажите его здесь
      },
      models: [
        'article', // Кеширование модели article
      ],
    },
  },
});
