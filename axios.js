import axios from 'axios'

const api = axios.create({
    baseURL: 'https://grupoamazonas.econocargo.net/',

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",

        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',

        'Authorization': 'Bearer 3|rTWCZe7kRNTF0hbQAQk1GoPU7Tc4KRzCbk2KYdi0'


    },
})

export default api;
