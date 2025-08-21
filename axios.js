import axios from 'axios'

const api = axios.create({
    baseURL: 'https://ducoprint.econocargo.net/',

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",

        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',

        'Authorization': 'Bearer 4|dmfpe7NfGZPg3nne2kfe8tYPFUl26c3cK63hY2X9'


    },
})

export default api;
