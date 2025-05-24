# Admin Dashboard

A full-stack MERN application for managing users and products with an admin dashboard.

## Features

- JWT-based authentication
- User management (CRUD operations)
- Product management (CRUD operations)
- Analytics dashboard with charts
- Responsive design with Tailwind CSS
- Protected routes

## Tech Stack

### Frontend
- React
- React Router
- Tailwind CSS
- Chart.js
- Axios
- Headless UI

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- JWT Authentication

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Setup Instructions

### Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the server directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/admin-dashboard
   JWT_SECRET=your-super-secret-jwt-key
   JWT_EXPIRE=24h
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment

### Backend Deployment (Render)

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set the following:
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Add environment variables from your `.env` file

### Frontend Deployment (Vercel)

1. Create a new project on Vercel
2. Connect your GitHub repository
3. Set the following:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register a new admin user
- POST `/api/auth/login` - Login user

### Users
- GET `/api/users` - Get all users
- GET `/api/users/:id` - Get user by ID
- PUT `/api/users/:id` - Update user
- DELETE `/api/users/:id` - Delete user

### Products
- GET `/api/products` - Get all products
- GET `/api/products/:id` - Get product by ID
- POST `/api/products` - Create product
- PUT `/api/products/:id` - Update product
- DELETE `/api/products/:id` - Delete product

## License

MIT 