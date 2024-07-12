// constants.js
let BASE_URL = 'http://localhost:8000'; // Default for development

if (process.env.NODE_ENV === 'production') {
  BASE_URL = ''; // Assuming frontend and backend are served from the same origin
}

export { BASE_URL };
