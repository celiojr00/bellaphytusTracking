import axios from 'axios'

const api = axios.create({
    baseURL: 'https://grupojpp.ddns.net/',

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",

        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',

        'Authorization': 'Bearer 128|v9JgUab08hJJ0w6p9cMYg5kLyf2qe8uiw77qUEyg'


    },
})

export default api;
