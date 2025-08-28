import axios from 'axios'

const api = axios.create({
    baseURL: 'https://grupofioforte.econocargo.net/',

    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",

        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',

        'Authorization': 'Bearer 3|ta51MtFPeASn3tepihH4d84WBh5eNtkp849YApry'


    },
})

export default api;
