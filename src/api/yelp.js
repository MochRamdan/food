import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 4b12oWm4ZzmSlzFduusvU0AeGOj1LVxstQVC43vIF5ks4-48m1Oxy4LIo0szjnlm7yjM4306J_iO4OWZfUOCz1IEKBKGLrUmmviN4-LrpMxa7agWkBpLqU-1Imv8XnYx'
    }
});