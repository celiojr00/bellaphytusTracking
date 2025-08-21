import axios from 'axios'

const api = axios.create({
    baseURL: 'https://theramartbrasil.ddns.net/',

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",

        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',

        'Authorization': 'Bearer 7|NY3vHVnwj1ow5HzCHSnUyhHcp8FeCKBrIEdyJw9w'


    },
})

export default api;
