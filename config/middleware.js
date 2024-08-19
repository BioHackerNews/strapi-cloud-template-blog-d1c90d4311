/* module.exports = ({ env }) => ({
  settings: {
    cache: {
      enabled: true,
      type: 'redis',
      maxAge: 3600000, // 1 hour in milliseconds
      redisConfig: {
        host: env('REDIS_HOST', 'redis-19991.c8.us-east-1-4.ec2.redns.redis-cloud.com'), // Хост вашего Redis-сервера
        port: env.int('REDIS_PORT', 19991),  // Порт вашего Redis-сервера
        password: env('REDIS_PASSWORD', 'lahYVIhHyvDj8Uvr6JrOGzRIpwQW0yqq'), // Пароль для доступа к Redis
      },
      models: [
        'article', // Кеширование модели article
      ],
    },
  },
});
 */

module.exports = ({ env }) => ({
  settings: {
    cache: {
      enabled: false,  // Отключаем кеширование
    },
  },
});
