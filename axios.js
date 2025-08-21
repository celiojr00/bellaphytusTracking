import axios from 'axios'

const api = axios.create({
    baseURL: 'https://goldendistri.econocargo.net/',

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",

        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',

        'Authorization': 'Bearer 3|lJ34h7mODJvz9WqHi1z7COonChQ7o7uuRLigoeBd'


    },
})

export default api;
