import axios from 'axios'

const api = axios.create({
    baseURL: 'https://lotus.econocargo.net/',

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",

        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',

        'Authorization': 'Bearer 4|79ZcTww9eHMdVN5euv4DuOXxpGXVSgJipxPQPox9'


    },
})

export default api;
