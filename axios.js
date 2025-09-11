import axios from 'axios'

const api = axios.create({
    baseURL: 'https://asclepharma.econocargo.net/',

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",

        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',

        'Authorization': 'Bearer 3|Qxjjb010WSqNiPCGknNsHHptJBAHCSi9tKeCHE9M'


    },
})

export default api;
