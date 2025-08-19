import axios from 'axios'

const api = axios.create({
    baseURL: 'https://lynv.econocargo.net/',

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",

        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',

        'Authorization': 'Bearer 4|YfPhBf4HSo6VmHHGYTfbCG05Z0Ts0iozZBZ5CLNJ'


    },
})

export default api;
