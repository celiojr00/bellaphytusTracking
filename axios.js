import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/',

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",

        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',

        'Authorization': 'Bearer 127|SOnmdzBkgD7R9a71ixekLqCqR90YS1aGA3vMNX2F'


    },
})

export default api;
