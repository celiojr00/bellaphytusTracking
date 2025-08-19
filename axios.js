import axios from 'axios'

const api = axios.create({
    baseURL: 'https://lelloprint.ddns.net/',

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",

        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',

        'Authorization': 'Bearer 37|nIJALPhiiCorCYweIo6a5u5IydiST83sDdfYdd0r'


    },
})

export default api;
