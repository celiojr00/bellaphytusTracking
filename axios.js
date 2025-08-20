import axios from 'axios'

const api = axios.create({
    baseURL: 'https://airfresh.econocargo.net/',

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",

        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',

        'Authorization': 'Bearer 11|WL6tUsnjBFToB7g0fJDHhSeDESRRlLkFYzAx9kRb'


    },
})

export default api;
