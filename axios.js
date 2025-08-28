import axios from 'axios'

const api = axios.create({
    baseURL: 'https://menfirst.econocargo.net/',

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",

        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',

        'Authorization': 'Bearer 7|KTsMv4KlgCWG1vm2F7mNsrVLUbR535BMC80CaLi5'


    },
})

export default api;
