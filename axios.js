import axios from 'axios'

const api = axios.create({
    baseURL: 'https://floranativabr.econocargo.net/',

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",

        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',

        'Authorization': 'Bearer 5|4eRuH36y9rsb88YoT6LbZKBEvu6L6ThqtRhTUlhs'


    },
})

export default api;
