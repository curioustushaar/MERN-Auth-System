# MERN Stack Authentication System 🔐

This is a full-stack **User Authentication System** built with the **MERN stack (MongoDB, Express.js, React.js, Node.js)**.

---

## 🚀 Features:

- User Registration (Signup)
- Secure Login with JWT Token
- Password Hashing with Bcrypt
- Storing JWT Token in HttpOnly Cookies
- Protected Routes (Both Backend and Frontend)
- User Context API in React
- Error Handling with Toast Notifications
- Axios API Calls
- React Router for Navigation

---

## 🛠️ Tech Stack:

- **Frontend:** React.js, Axios, React Context, React Router DOM, Toastify
- **Backend:** Node.js, Express.js, MongoDB (with Mongoose), JWT, Bcrypt
- **Database:** MongoDB Atlas (Cloud)

---

## 🧑‍💻 Installation Guide (Local Setup):

### Backend Setup:
```bash
cd server
npm install
npm run dev



# Create a .env file:
PORT=4000
MONGO_URL=your_mongo_uri
JWT_SECRET=your_secret_key


# Frontend Setup:

cd client
npm install
npm start
