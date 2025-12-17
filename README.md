# 📋 Project Management App using Context API

A modern, feature-rich project management application built with **React** and **Vite**, demonstrating the power of **React Context API** for state management without prop drilling.

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-4.5.14-646CFF?style=flat&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

## ✨ Features

- ✅ **Create, View, and Delete Projects** - Manage multiple projects with ease
- ✅ **Task Management** - Add and remove tasks for each project
- ✅ **Context API Integration** - Centralized state management without prop drilling
- ✅ **Responsive Design** - Beautiful UI built with TailwindCSS
- ✅ **Form Validation** - Modal-based error handling for invalid inputs
- ✅ **Fast Refresh** - Instant feedback during development with Vite HMR

## 🏗️ Architecture

This application demonstrates a clean architecture using **React Context API** to solve the prop drilling problem:

### Context API Structure

```javascript
ProjectContext
├── State
│   ├── projectId (undefined | null | number)
│   ├── project[] (array of all projects)
│   └── task[] (array of all tasks)
└── Functions
    ├── createProject()
    ├── selectedProject(id)
    ├── cancelProject()
    ├── addProject(data)
    ├── deleteProject()
    ├── addTask(text)
    └── deleteTask(id)
```

### Component Hierarchy

```
App.jsx
└── ProjectProvider (Context)
    └── AppContent.jsx
        ├── SideBar.jsx
        └── Conditional Rendering:
            ├── NoProject.jsx (projectId === undefined)
            ├── NewProject.jsx (projectId === null)
            └── SelectedProject.jsx (projectId === number)
                └── Tasks.jsx
                    └── NewTask.jsx
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd "Project Management App using Context Api"
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
Project Management App using Context Api/
├── src/
│   ├── components/
│   │   ├── AppContent.jsx      # Main app logic and routing
│   │   ├── SideBar.jsx         # Project list sidebar
│   │   ├── NoProject.jsx       # Empty state component
│   │   ├── NewProject.jsx      # Create new project form
│   │   ├── SelectedProject.jsx # Project details view
│   │   ├── Tasks.jsx           # Task list component
│   │   ├── NewTask.jsx         # Add task component
│   │   ├── Button.jsx          # Reusable button component
│   │   ├── Input.jsx           # Reusable input component
│   │   └── Modal.jsx           # Error modal component
│   ├── store/
│   │   └── context-api.jsx     # Context provider and state
│   ├── assets/
│   │   └── no-projects.png     # Empty state image
│   ├── App.jsx                 # Root component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── public/
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎯 Key Concepts Demonstrated

### 1. **Context API vs Prop Drilling**

**Before (Prop Drilling):**

```javascript
// Props passed through multiple levels
App → AppContent → SelectedProject → Tasks → NewTask
```

**After (Context API):**

```javascript
// Direct access from any component
const { addTask, deleteTask } = useContext(ProjectContext);
```

### 2. **Centralized State Management**

All state is managed in `context-api.jsx`:

- Single source of truth
- Easy to debug and maintain
- No redundant state across components

### 3. **Component Composition**

Components are small, focused, and reusable:

- `Button.jsx` - Reusable button with consistent styling
- `Input.jsx` - Flexible input/textarea component
- `Modal.jsx` - Error handling modal using `forwardRef`

## 🛠️ Technologies Used

- **React 18.3.1** - UI library
- **Vite 4.5.14** - Build tool and dev server
- **TailwindCSS 3.4.17** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **ESLint** - Code linting

## 📚 Learning Resources

- [React Context API Documentation](https://react.dev/reference/react/createContext)
- [Vite Documentation](https://vitejs.dev/)
- [TailwindCSS Documentation](https://tailwindcss.com/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Created with ❤️ as a demonstration of React Context API best practices.

By Dinesh

**Happy Coding! 🚀**
