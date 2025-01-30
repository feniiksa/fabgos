# Используем официальный образ Node.js для сборки
FROM node:18 AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json (если есть)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта
COPY . .

# Создаем сборку проекта
RUN npm run build

# Используем официальный образ Nginx для продакшна
FROM nginx:alpine AS production

# Копируем собранные файлы из предыдущего шага в папку Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Копируем кастомный конфиг Nginx (если нужно)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Открываем 80 порт (по умолчанию для HTTP)
EXPOSE 80

# Команда по умолчанию (Nginx запускается автоматически)