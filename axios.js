import axios from 'axios'

const api = axios.create({
    baseURL: 'https://brgfoods.econocargo.net/',

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",

        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',

        'Authorization': 'Bearer 7|iRklwdcS46hhOcd5nYDEKpneN8GCGI6mMh0wSz2P'


    },
})

export default api;
