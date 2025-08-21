import axios from 'axios'

const api = axios.create({
    baseURL: 'https://bascel.econocargo.net/',

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",

        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',

        'Authorization': 'Bearer 3|sP5w1VXmsmfV7uwYP5gu3UC0HItQMTFd6b4gO0aA'


    },
})

export default api;
