let apiLink: string = process.env.BACKEND_URL || 'http://localhost:3000/api/v1';

if (process.env.NODE_ENV === 'production') {
    apiLink = process.env.BACKEND_URL || 'https://capstone-project-teamwork.herokuapp.com/api/v1';
}

export { apiLink }