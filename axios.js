import axios from 'axios'

const api = axios.create({
    baseURL: 'https://fhom.econocargo.net/',

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",

        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',

        'Authorization': 'Bearer 8|U310H1n6678MWI2UewLEp9wZ93huBNuWKQwv2u2M'


    },
})

export default api;
