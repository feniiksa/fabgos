# Этап сборки (если у вас есть сборка, например, через npm run build)
FROM node:18 AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта
COPY . .

# Создаем сборку проекта (если нужно)
RUN npm run build

# Этап продакшна (используем Nginx)
FROM nginx:alpine AS production

# Копируем собранные файлы из этапа builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Копируем кастомный конфиг Nginx (если нужно)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Открываем 80 порт (по умолчанию для HTTP)
EXPOSE 80

# Nginx запускается автоматически, поэтому команда не требуется