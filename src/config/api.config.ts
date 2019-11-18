let apiLink: string = 'http://localhost:3000/api/v1';
if (process.env.NODE_ENV === "test") {
    apiLink = "https://owen-capstone-project-teamwork.herokuapp.com/api/v1";
}

export { apiLink }