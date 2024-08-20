FROM strapi/strapi

# Установка переменных окружения
ENV REDIS_HOST=redis-19991.c8.us-east-1-4.ec2.redns.redis-cloud.com
ENV REDIS_PORT=19991
ENV REDIS_PASSWORD=lahYVIhHyvDj8Uvr6JrOGzRIpwQW0yqq

# Копирование вашего Strapi проекта в контейнер
COPY ./ /srv/app

WORKDIR /srv/app

# Установка зависимостей
RUN npm install

# Запуск Strapi
CMD ["npm", "run", "develop"]
