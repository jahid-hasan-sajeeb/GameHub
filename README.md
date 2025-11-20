# GameHub

GameHub is a modern, responsive web application where users can explore games, authenticate securely, and manage their profiles. It features a clean UI, smooth animations, and a full authentication system powered by Firebase. The project is built using React, Tailwind CSS, and React Router.

---

## Live URL
https://gamehub-jahid.netlify.app/

---

## Purpose

The purpose of GameHub is to provide an interactive and polished platform for users to browse game content while offering secure user authentication, a user-friendly profile system, and an overall engaging experience. The project demonstrates the use of modern frontend technologies, API handling, authentication flows, and component-based architecture.

---

## Key Features

### 🔐 Authentication System
- Login with Email and Password  
- Login using Google  
- Login using GitHub  
- Logout functionality  
- Password reset via email  
- Email auto-fill from login to reset page  
- Fully handled via Firebase Auth  
- Global auth state using React Context  

### 👤 Profile Management
- Display user details:
  - Profile image
  - Display name
  - Email
- Update profile:
  - Change display name
  - Update profile photo URL
- Sign Out directly from the Profile page


### 🧭 Navigation
- Conditional Navbar:
  - Logged-out users see “Login”
  - Logged-in users see profile image or a “Profile” label
- Routing managed using React Router DOM
- Smooth animations via Motion

### 🎨 UI/UX
- Tailwind CSS for fast, responsive styling  
- Reusable components  
- Mobile-friendly layouts  
- Toast notifications for feedback  

---

## Technologies & NPM Packages Used

- React  
- React Router DOM – Client-side routing  
- Tailwind CSS – Utility-first styling  
- Motion – Animations    
- React Toastify – Toast message UI  
- Firebase – Authentication system  

# Start development server
npm run dev
