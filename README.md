# 📬 Contact Form Application — MongoDB & PostgreSQL Integration

[![Node.js](https://img.shields.io/badge/Node.js-v24-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5.x-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?logo=mongodb&logoColor=white)](https://mongoosejs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Prisma-4169E1?logo=postgresql&logoColor=white)](https://www.prisma.io/)

## 📖 Overview

This project is a Full-Stack Contact Form developed during the **Devzey Summer Internship 2026**.

The application collects user information through a React frontend and stores the same data in both MongoDB (using Mongoose) and PostgreSQL (using Prisma ORM).

The project demonstrates validation, backend API development, and simultaneous storage in two different database systems.

---

# ✨ Features

- 📝 Contact Form
- ✅ Client-side Validation
- 🔒 Server-side Validation
- 🧹 Input Sanitization
- 🌐 REST API
- 💾 Save to MongoDB
- 🗄️ Save to PostgreSQL
- ⚡ Prisma ORM Integration
- 🍃 Mongoose Integration
- 🎨 Responsive React UI
- ❌ Proper Error Handling
- ✔️ Success/Error Messages

---

# 🛠️ Technologies Used

## Frontend

- React 19
- Vite
- JavaScript
- CSS

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- PostgreSQL
- Prisma ORM
- dotenv

---

# 📁 Project Structure

```text
contact-form_task6/
│
├── contact-backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── prisma/
│   ├── server.js
│   └── package.json
│
├── contact-frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── screenshots/
│
└── README.md
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone <repository-url>
```

---

## Backend Setup

```bash
cd contact-backend

npm install
```

Create a `.env` file

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_CONNECTION_STRING

DATABASE_URL=YOUR_POSTGRESQL_CONNECTION_STRING
```

Generate Prisma Client

```bash
npx prisma generate
```

Run Prisma Migration

```bash
npx prisma migrate dev
```

Start Backend

```bash
node server.js
```

---

## Frontend Setup

```bash
cd contact-frontend

npm install

npm run dev
```

Open

```
http://localhost:5173
```

---

# 🔄 Application Workflow

1. User enters contact information.
2. React validates required fields.
3. Form data is sent to the Express API.
4. Backend sanitizes and validates data.
5. Data is saved to MongoDB.
6. The same data is saved to PostgreSQL.
7. Success response is returned.
8. User receives confirmation.

---

# 📸 Screenshots

The `screenshots` folder contains:

- Contact Form UI
- Successful Submission
- MongoDB Compass Record
- PostgreSQL Database Record

---

# 📚 Learning Outcomes

- React Forms
- Form Validation
- REST APIs
- Express.js
- MongoDB
- PostgreSQL
- Prisma ORM
- Mongoose ODM
- Backend Architecture
- Database Integration
- Client-Server Communication

---

# 👩‍💻 Developed For

**Devzey Summer Internship 2026**

Task 6 – Contact Form Application