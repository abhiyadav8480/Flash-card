# Flash-card
this is flash vard


# 🧠 Flash Card App (MERN Stack)

A simple full-stack Flash Card application built using **Node.js, Express, MongoDB, HTML, CSS, and JavaScript**.
Users can create flashcards and click to flip between question and answer.

---

## 🚀 Features

* ➕ Add new flashcards
* 🔄 Flip cards (Question ↔ Answer)
* 💾 Store data in MongoDB
* 🌐 REST API with Express
* 🎨 Simple UI with HTML, CSS, JS

---

## 🛠️ Tech Stack

### Frontend:

* HTML
* CSS
* JavaScript

### Backend:

* Node.js
* Express.js

### Database:

* MongoDB

---

## 📁 Project Structure

```
flashcard-app/
 ├── backend/
 │    ├── server.js
 │    ├── models/
 │    │     └── Card.js
 │    └── routes/
 │          └── cardRoutes.js
 │
 ├── frontend/
 │    ├── index.html
 │    ├── style.css
 │    └── script.js
 │
 └── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone <your-repo-url>
cd flashcard-app
```

---

### 2️⃣ Install dependencies

```
npm install
```

---

### 3️⃣ Start MongoDB

Make sure MongoDB is running locally:

```
mongod
```

---

### 4️⃣ Run Backend Server

```
node backend/server.js
```

Server will start on:

```
http://localhost:5000
```

---

### 5️⃣ Run Frontend

Open this file in browser:

```
frontend/index.html
```

---

## 📡 API Endpoints

### Get all cards

```
GET /api/cards
```

### Add a new card

```
POST /api/cards
```

Body:

```
{
  "question": "What is Java?",
  "answer": "A programming language"
}
```

---

## 🎯 How It Works

1. User enters question & answer
2. Data is sent to backend via API
3. Stored in MongoDB
4. Cards are fetched and displayed
5. Click on card → flip between Q/A

---

## 🔥 Future Improvements

* ✏️ Edit/Delete flashcards
* 🔐 User authentication (JWT)
* 📂 Categories for cards
* ⚛️ Convert frontend to React (MERN)
* ⏱️ Spaced repetition algorithm

---

## 🤝 Contributing

Feel free to fork this project and improve it!

---

## 📜 License

This project is open source and free to use.
