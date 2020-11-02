import axios from 'axios';

// Create an instance of axios to shorten the query in App.js
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `${process.env.REACT_APP_UNSPLASH_KEY}`
    }
})