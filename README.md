# Feedback Application

This is a simple feedback application consisting of a backend built with NestJS and a frontend built with React. The backend provides a REST API to submit and retrieve feedback entries, and the frontend provides a form to submit feedback and a list to display all feedback entries.

## Features

- **Backend**
  - Built with NestJS and TypeScript
  - REST API to submit and retrieve feedback
  - In-memory storage for feedback entries
  - Optional rate limiting to restrict submissions to one feedback per 10 seconds per IP address

- **Frontend**
  - Built with React and TypeScript
  - Form to submit feedback
  - List to display all feedback entries
  - Uses Axios for API communication

## Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)
