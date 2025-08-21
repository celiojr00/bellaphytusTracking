import axios from 'axios'

const api = axios.create({
    baseURL: 'https://rcradioadores.ddns.net/',

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",

        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',

        'Authorization': 'Bearer 13|WCXAQd4CeRpuciMgWQ6YuPcMNYI2K7LSba3s7hRK'


    },
})

export default api;
