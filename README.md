# Quick Notes

Quick Notes is a web application for storing and managing your notes, accessible from both desktop and mobile devices.

## Features

- **Authentication**: Users can securely log in to access their saved notes.
- **Note Management**: Create, edit, and delete notes.
- **Responsive Design**: Accessible and usable on both laptops and mobile devices.

## Technologies Used

- **Frontend**: React, Vite, Axios, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Deployment**: Render
- **Authentication**: JSON Web Token (JWT)

## Deployment

The Quick Notes app is currently deployed and accessible at [here](https://notes-app-bytx.onrender.com)

## Getting Started

To run the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/quick-notes.git
   cd backend
   
2. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```plaintext
     MONGO_DB_URL=https://api.example.com  # Replace with your backend API URL
     ACCESS_TOKEN_SECRET=your_jwt_secret_key   # Replace with your JWT secret key
     ```
       
3. **Install dependencies & build frontend:**
   ```bash
   npm run build
   
4. **Start the development server:**
   ```bash
   npm start

5. Open your browser and navigate to **localhost:8000** to view the app.



## Acknowledgements

Special thanks to the developers and contributors of the libraries and tools used in this project.
