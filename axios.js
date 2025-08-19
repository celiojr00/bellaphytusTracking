import axios from 'axios'

const api = axios.create({
    baseURL: 'https://tetrix.ddns.net/',

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",

        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',

        'Authorization': 'Bearer 23|8mTuUto8B6edqSAD6I6wic1flQCZXZDvL9BNcHEL'


    },
})

export default api;
