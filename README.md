# Note App

A modern, full-stack note-taking application built with the **MERN Stack** (MongoDB, Express, React, Node.js).

## 📝 About

This project is a comprehensive note application that provides users with a seamless and intuitive experience for creating, managing, and organizing their notes. Features include user authentication, secure note management, and a beautiful, responsive user interface.

## 🛠️ Tech Stack

### Frontend

- **Framework**: React 19 + Vite
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **State Management**: Context API

### Backend

- **Runtime**: Node.js
- **Framework**: Express.js 5
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcrypt.js
- **Security**: CORS enabled
- **Environment**: dotenv

## ✨ Features

### Authentication

- ✅ User registration with secure password hashing
- ✅ User login with JWT token generation
- ✅ Protected routes with authentication middleware
- ✅ Persistent authentication with Context API

### Note Management

- ✅ Create new notes
- ✅ View all user notes
- ✅ View individual note details
- ✅ Edit existing notes
- ✅ Delete notes
- ✅ User-specific note access (users can only view/edit their own notes)

### UI/UX

- ✅ Modern, responsive design with Tailwind CSS
- ✅ Intuitive navigation with Header and Footer components
- ✅ Note card component for displaying notes
- ✅ Toast notifications for user feedback
- ✅ 404 Not Found page
- ✅ Protected route component for secure pages

## 📂 Project Structure

```
Note App/
├── Backend/
│   ├── server.js                 # Express server entry point
│   ├── config/
│   │   └── db.js                 # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js     # Authentication logic
│   │   └── noteController.js     # Note CRUD operations
│   ├── middleware/
│   │   └── authMiddleware.js     # JWT verification
│   ├── models/
│   │   ├── User.js               # User schema
│   │   └── Note.js               # Note schema
│   ├── routes/
│   │   ├── authRoutes.js         # Auth endpoints
│   │   └── noteRoutes.js         # Note endpoints
│   └── utils/
└── Frontend/
    ├── src/
    │   ├── main.jsx              # App entry point
    │   ├── App.jsx               # Root component with routing
    │   ├── index.css             # Global styles
    │   ├── api/
    │   │   └── axios.jsx         # Axios configuration
    │   ├── context/
    │   │   └── AuthContext.jsx   # Authentication context
    │   ├── components/
    │   │   ├── Header.jsx        # Navigation header
    │   │   ├── Footer.jsx        # Footer component
    │   │   ├── NoteCard.jsx      # Note display card
    │   │   └── ProtectedRoute.jsx # Route protection
    │   └── pages/
    │       ├── Home.jsx          # Landing page
    │       ├── Login.jsx         # User login
    │       ├── Register.jsx      # User registration
    │       ├── Notes.jsx         # All notes view
    │       ├── NoteDetails.jsx   # Single note view
    │       ├── CreateNote.jsx    # Create new note
    │       ├── EditNote.jsx      # Edit note
    │       └── NotFound.jsx      # 404 page
    ├── index.html
    ├── vite.config.js
    ├── tailwind.config.js
    └── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd "Note App"
   ```

2. **Backend Setup**

   ```bash
   cd Backend
   npm install
   ```

   Create a `.env` file in the Backend directory:

   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

   Start the backend server:

   ```bash
   npm run dev    # Development with nodemon
   # or
   npm start      # Production
   ```

3. **Frontend Setup**

   ```bash
   cd ../Frontend
   npm install
   ```

   Create a `.env` file in the Frontend directory (if needed):

   ```env
   VITE_API_URL=http://localhost:5000
   ```

   Start the development server:

   ```bash
   npm run dev
   ```

4. **Access the Application**
   - Frontend: `http://localhost:5173` (default Vite port)
   - Backend API: `http://localhost:3001`

## 📡 API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Notes (Protected Routes)

- `GET /api/notes` - Get all notes for authenticated user
- `GET /api/notes/:id` - Get specific note
- `POST /api/notes` - Create a new note
- `PUT /api/notes/:id` - Update a note
- `DELETE /api/notes/:id` - Delete a note

## 🔐 Security Features

- Password hashing with bcrypt
- JWT-based authentication
- Protected API routes
- User-specific data access
- CORS configuration
- Environment variable protection

## 🎨 UI Highlights

- Clean, modern design
- Fully responsive layout
- Smooth transitions and animations
- Intuitive user interface
- Real-time toast notifications
- Icon integration with Lucide React

## 📝 Scripts

### Backend

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

### Frontend

- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚀 Project Status

**✅ Fully Functional** - All core features implemented and working!

The application is complete with:

- ✅ User authentication system
- ✅ Full CRUD operations for notes
- ✅ Secure API endpoints
- ✅ Modern, responsive UI
- ✅ Protected routes
- ✅ Database integration

## 📌 Future Enhancements

- [ ] Note categories/tags
- [ ] Search and filter functionality
- [ ] Rich text editor
- [ ] Dark mode toggle
- [ ] Note sharing capabilities
- [ ] Email verification
- [ ] Password reset functionality
- [ ] Note archiving
- [ ] Export notes (PDF, Markdown)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using the MERN Stack
