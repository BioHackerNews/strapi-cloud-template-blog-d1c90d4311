
const Redis = require('ioredis').default;

// Подключение к Redis
const redis = new Redis({
  host: 'redis-19991.c8.us-east-1-4.ec2.redns.redis-cloud.com', // Укажите хост Redis
  port: 19991,        // Укажите порт Redis
  password: 'lahYVIhHyvDj8Uvr6JrOGzRIpwQW0yqq', // Если требуется пароль
});

// Функция для получения данных из кеша
async function getFromCache(key) {
  return await redis.get(key);
}

// Функция для сохранения данных в кеш
async function setInCache(key, value, expiration = 3600) {
  await redis.set(key, value);
  await redis.expire(key, expiration);
}

// Функция для сохранения статьи в Redis
async function saveToRedis(article) {
  const key = `article_${article.id}`;
  const articleData = JSON.stringify(article);
  await setInCache(key, articleData, 3600); // Сохраняем статью на 1 час (3600 секунд)
}

module.exports = {
  getFromCache,
  setInCache,
  saveToRedis,
};
