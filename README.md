# Employee Management System

## Overview

This **Employee Management System** is a full-stack web application designed to simplify employee data management. Built with React for the frontend and Node.js for the backend, this system interacts with a MySQL database to store and manage employee records. Key features include authentication using JSON Web Tokens (JWT), role-based access control, and secure data handling with encryption. The application is also Dockerized for ease of deployment.

## Features

- **Authentication**:
  - Custom JWT-based authentication for secure login.
  - Role-based access control for employees and administrators.

- **Employee Management**:
  - Fetch and display employee records.
  - Add, update, and delete employee data.

- **Security**:
  - Encrypted employee data using hash functions.
  - Protected routes in React for secure navigation.

- **Dockerization**:
  - Simplified deployment using Docker containers.

## Technology Stack

- **Frontend**:
  - Vite
  - React.js
  - Axios (for API communication)

- **Backend**:
  - Node.js with Express.js

- **Database**:
  - MySQL

- **Authentication**:
  - JSON Web Tokens (JWT)

- **Other Tools**:
  - Docker (for containerization)
  - bcrypt (for password hashing)
  - MySQL Workbench

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js 14+
- Docker and Docker Compose
- MySQL 8+

### Steps

1. Clone the Repository:

   ```bash
   git clone https://github.com/jashvarthini18/Employee-Management-System.git
   cd Employee-Management-System
   ```

2. Set Up Environment Variables:

   Create a `.env` file in the project root with the following:

   ```env
   MYSQL_HOST=your-database-host
   MYSQL_USER=your-database-user
   MYSQL_PASSWORD=your-database-password
   MYSQL_DATABASE=employee_management
   JWT_SECRET=your-jwt-secret
   ```

3. Install Dependencies:

   ```bash
   # Backend dependencies
   cd backend
   npm install

   # Frontend dependencies
   cd ../frontend
   npm install
   ```

4. Run the Application:

   ```bash
   docker-compose up --build
   ```

5. Access the Interface:

   Open the application on the browser

## Usage

1. **Login**:
   - Access the login page to authenticate as an employee or admin.

2. **View Employee Records**:
   - Once logged in, view all employee data based on your role.

3. **Manage Employees**:
   - Add, update, or delete employee information based on permissions.

4. **Role-Based Features**:
   - Admin users can manage other employees and access additional functionality.
