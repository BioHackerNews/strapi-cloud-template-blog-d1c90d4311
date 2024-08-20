module.exports = ({ env }) => ({
  settings: {
    cache: {
      enabled: true,
      type: 'redis',
      maxAge: 3600000, // 1 hour in milliseconds
      redisConfig: {
        host: env('REDIS_HOST', 'localhost'), // Дефолтное значение 'localhost', если переменная не установлена
        port: env.int('REDIS_PORT', 6379), // Дефолтный порт 6379, если переменная не установлена
        password: env('REDIS_PASSWORD', null), // Если пароль не установлен, использовать null
      },
      models: [
        'article', // Кеширование модели article
      ],
    },
  },
});



/* module.exports = ({ env }) => ({
  settings: {
    cache: {
      enabled: false,  // Отключаем кеширование
    },
  },
});
 */