import axios from 'axios'

const api = axios.create({
    baseURL: 'https://mgerais.econocargo.net/',

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",

        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',

        'Authorization': 'Bearer 3|UNe0mN9gyrhzd94FW5IKroK6VNJ9NqI7LYeGUdvN'


    },
})

export default api;
