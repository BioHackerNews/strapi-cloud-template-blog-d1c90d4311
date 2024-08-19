'use strict';

const { createCoreController } = require('@strapi/strapi').factories;
const { saveToRedis, getFromCache, setInCache } = require('../../../services/redis');
const redis = require('../../../services/redis').redis; // Импорт самого объекта redis

module.exports = createCoreController('api::article.article', ({ strapi }) => ({
  async create(ctx) {
    const response = await super.create(ctx);

    // Логирование данных статьи перед сохранением в Redis
    console.log("Saving to Redis:", response.data);

    await saveToRedis(response.data);

    return response;
  },

  async find(ctx) {
    const cacheKey = 'articles_list';
    let cachedData = await getFromCache(cacheKey);

    if (cachedData) {
      // Если данные есть в кеше, возвращаем их
      return JSON.parse(cachedData);
    }

    // Если в кеше нет данных, запрашиваем их из базы данных
    const response = await super.find(ctx);

    // Сохраняем полученные данные в кеш
    await setInCache(cacheKey, JSON.stringify(response));

    return response;
  },

  async update(ctx) {
    const response = await super.update(ctx);

    // Обновляем кеш
    await saveToRedis(response.data);

    return response;
  },

  async delete(ctx) {
    const response = await super.delete(ctx);

    // Удаляем данные из кеша
    await redis.del(`article_${response.data.id}`);

    return response;
  },
}));
