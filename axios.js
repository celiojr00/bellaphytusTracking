import axios from 'axios'

const api = axios.create({
    baseURL: 'https://docesfardin.ddns.net/',

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",

        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',

        'Authorization': 'Bearer 4|s5zs0qYW6nCkPqnTFNLfuwvPQrQjoqGOgIZK1fvs'


    },
})

export default api;
