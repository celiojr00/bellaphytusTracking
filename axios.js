import axios from 'axios'

const api = axios.create({
    baseURL: 'https://maifredo.econocargo.net/',

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",

        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',

        'Authorization': 'Bearer 3|fotdjjb6bdoivmDDVrnEAjOjirqdD6jXyz0oYp8H'


    },
})

export default api;
