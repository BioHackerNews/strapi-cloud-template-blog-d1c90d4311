FROM strapi/strapi

# Установка переменных окружения
ENV REDIS_HOST=localhost
ENV REDIS_PORT=6379
ENV REDIS_PASSWORD=your_redis_password

# Копирование вашего Strapi проекта в контейнер
COPY ./ /srv/app

WORKDIR /srv/app

# Установка зависимостей
RUN npm install

# Запуск Strapi
CMD ["npm", "run", "develop"]
