
# Используем официальный образ Node.js
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

# Используем легкий HTTP-сервер для статических файлов
FROM node:18-slim AS production

WORKDIR /app

# Устанавливаем 'serve' для обслуживания статических файлов
RUN npm install -g serve

# Копируем собранные файлы из предыдущего шага
COPY --from=builder /app/dist /app/dist

# Указываем команду по умолчанию
CMD ["serve", "-s", "dist", "-l", "3000"]

# Открываем 3000 порт
EXPOSE 3000
