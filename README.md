# Apollo React CRUD

Приложение для управления книгами, построенное на GraphQL с использованием Apollo Server и Apollo Client.

## 🚀 Технологии

**Backend:**
- Node.js
- Apollo Server
- GraphQL

**Frontend:**
- React
- Apollo Client
- Vite

## 📁 Структура проекта

```apollo-react-crud/
├── server/          # GraphQL API сервер
│   ├── index.js     # Основной файл сервера
│   └── package.json
├── client/          # React приложение
│   ├── src/
│   │   ├── components/
│   │   │   ├── BookList.jsx
│   │   │   ├── BookRow.jsx
│   │   │   ├── AddBook.jsx
│   │   │   └── UpdateBook.jsx
│   │   ├── graphql.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
└── package.json     # Корневой package.json
```

## 🛠 Установка и запуск

### Предварительные требования
- Node.js >= 18
- npm >= 9

### Клонирование и установка зависимостей

# Клонируем репозиторий
git clone <your-repo-url>
cd apollo-react-crud

# Устанавливаем зависимости для сервера
cd server
npm install

# Устанавливаем зависимости для клиента
cd ../client
npm install

# Возвращаемся в корень и устанавливаем зависимости для параллельного запуска
cd ..
npm install

### Запуск в режиме разработки

**Вариант 1: Параллельный запуск (рекомендуется)**
npm run dev

**Вариант 2: Раздельный запуск**
# Терминал 1 - запуск сервера
cd server
npm run dev

# Терминал 2 - запуск клиента
cd client
npm run dev

После запуска:
- GraphQL API: http://localhost:4000
- React приложение: http://localhost:5173

## 🎯 Функциональность

### CRUD операции для книг:
- ✅ **Create** - Добавление новой книги
- ✅ **Read** - Просмотр списка всех книг
- ✅ **Update** - Редактирование информации о книге
- ✅ **Delete** - Удаление книги

### Особенности:
- Реактивное обновление UI при изменении данных
- Оптимистичные обновления для лучшего UX
- Кэширование данных через Apollo Client
- Обработка состояний загрузки и ошибок

## 📊 GraphQL Schema

type Book {
id: ID!
title: String!
author: String!
}

type Query {
books: [Book!]!
book(id: ID!): Book
}

type Mutation {
addBook(title: String!, author: String!): Book!
updateBook(id: ID!, title: String, author: String): Book!
deleteBook(id: ID!): ID!
}

## 🔧 Примеры GraphQL запросов

### Получение всех книг
query {
books {
id
title
author
}
}

### Добавление книги
mutation {
addBook(title: "Clean Code", author: "Robert Martin") {
id
title
author
}
}

### Обновление книги
mutation {
updateBook(id: "1", title: "Updated Title") {
id
title
author
}
}

### Удаление книги
mutation {
deleteBook(id: "1")
}

## 📝 Скрипты

**Корневой уровень:**
- npm run dev - Запуск сервера и клиента параллельно

**Сервер:**
- npm run dev - Запуск сервера в режиме разработки

**Клиент:**
- npm run dev - Запуск клиента в режиме разработки
- npm run build - Сборка для продакшена
- npm run preview - Предварительный просмотр сборки
