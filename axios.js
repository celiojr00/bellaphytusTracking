import axios from 'axios'

const api = axios.create({
    baseURL: 'https://atacadosaopaulo.ddns.net/',

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",

        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',

        'Authorization': 'Bearer 23|ID00DByqzZOBVVe112ZXr2nJvNewyroYCs3YTJvF'


    },
})

export default api;
