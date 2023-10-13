import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3'
axios.defaults.headers.common = {'Authorization': `bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTQzNGMzZTkwOGY4YzQwNjJhYTk4ZTkwY2VkODdiYiIsInN1YiI6IjY1MjY0MjFkMDcyMTY2NDViOGMwMmVkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.prPVQhJp0oc6YrgqLAgxm-8Z2jOcD_OO-Pys9NaDYc0`}
export default axios;