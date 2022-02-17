import axios from 'axios'

// Create baseURL request from TMDB
const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
})

export default instance;
